import { ComponentRef, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, Typography } from 'antd';
import styled from 'styled-components';
import { Path } from '@/utils/enum';
import SiderLayout from '@/components/layouts/SiderLayout';
import Prompt from '@/components/pages/home/prompt';
import DemoPrompt from '@/components/pages/home/prompt/DemoPrompt';
import useHomeSidebar from '@/hooks/useHomeSidebar';
import useAskPrompt from '@/hooks/useAskPrompt';
import useRecommendedQuestionsInstruction from '@/hooks/useRecommendedQuestionsInstruction';
import RecommendedQuestionsPrompt from '@/components/pages/home/prompt/RecommendedQuestionsPrompt';
import {
  useSuggestedQuestionsQuery,
  useCreateThreadMutation,
  useThreadLazyQuery,
} from '@/apollo/client/graphql/home.generated';
import { useGetSettingsQuery } from '@/apollo/client/graphql/settings.generated';
import { CreateThreadInput } from '@/apollo/client/graphql/__types__';

const { Text } = Typography;

const HomeEmptyState = styled.div`
  min-height: 100%;
  padding: 48px 24px 148px;
  text-align: center;

  .adm-home-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border: 1px solid var(--gray-4);
    border-radius: 18px;
    background: white;
    box-shadow: rgba(15, 23, 42, 0.06) 0 12px 32px;
  }

  .adm-home-logo img {
    object-fit: contain;
  }

  .adm-home-title {
    margin-top: 18px;
    font-size: 22px;
    font-weight: 600;
    color: var(--gray-9);
  }
`;

const Wrapper = ({ children }) => {
  return (
    <HomeEmptyState className="d-flex align-center justify-center flex-column">
      <div className="adm-home-logo">
        <Image
          src="/images/SmallMenuIcon.png"
          alt="داده یار"
          width={42}
          height={42}
          priority
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="adm-home-title">درباره داده هایتان سوال بپرسید</div>
      {children}
    </HomeEmptyState>
  );
};

const SampleQuestionsInstruction = (props) => {
  const { sampleQuestions, onSelect } = props;

  return (
    <Wrapper>
      <DemoPrompt demo={sampleQuestions} onSelect={onSelect} />
    </Wrapper>
  );
};

function RecommendedQuestionsInstruction(props) {
  const { onSelect, loading } = props;

  const {
    buttonProps,
    generating,
    recommendedQuestions,
    showRetry,
    showRecommendedQuestionsPromptMode,
  } = useRecommendedQuestionsInstruction();

  return showRecommendedQuestionsPromptMode ? (
    <div
      className="d-flex align-center flex-column pt-10"
      style={{ margin: 'auto' }}
    >
      <RecommendedQuestionsPrompt
        recommendedQuestions={recommendedQuestions}
        onSelect={onSelect}
        loading={loading}
      />
      <div className="py-12" />
    </div>
  ) : (
    <Wrapper>
      <Button className="mt-6" {...buttonProps} />
      {generating && (
        <Text className="mt-3 text-sm gray-6">
          در حال آماده سازی سوال های مناسب برای شما... (حدود ۱ دقیقه)
        </Text>
      )}
      {!generating && showRetry && (
        <Text className="mt-3 text-sm gray-6 text-center">
          فعلا نتوانستیم سوال پیشنهادی آماده کنیم.
          <br />
          کمی بعد دوباره امتحان کنید.
        </Text>
      )}
    </Wrapper>
  );
}

export default function Home() {
  const $prompt = useRef<ComponentRef<typeof Prompt>>(null);
  const router = useRouter();
  const homeSidebar = useHomeSidebar();
  const askPrompt = useAskPrompt();

  const { data: suggestedQuestionsData } = useSuggestedQuestionsQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [createThread, { loading: threadCreating }] = useCreateThreadMutation({
    onError: (error) => console.error(error),
    onCompleted: () => homeSidebar.refetch(),
  });
  const [preloadThread] = useThreadLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  const { data: settingsResult } = useGetSettingsQuery();
  const settings = settingsResult?.settings;
  const isSampleDataset = useMemo(
    () => Boolean(settings?.dataSource?.sampleDataset),
    [settings],
  );

  const sampleQuestions = useMemo(
    () => suggestedQuestionsData?.suggestedQuestions.questions || [],
    [suggestedQuestionsData],
  );

  const onSelectQuestion = async ({ question }) => {
    $prompt.current.submit(question);
  };

  const onCreateResponse = async (payload: CreateThreadInput) => {
    try {
      askPrompt.onStopPolling();
      const response = await createThread({ variables: { data: payload } });
      const threadId = response.data.createThread.id;
      await preloadThread({ variables: { threadId } });
      router.push(Path.Home + `/${threadId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SiderLayout loading={false} sidebar={homeSidebar}>
      {isSampleDataset && (
        <SampleQuestionsInstruction
          sampleQuestions={sampleQuestions}
          onSelect={onSelectQuestion}
        />
      )}

      {!isSampleDataset && (
        <RecommendedQuestionsInstruction
          onSelect={onCreateResponse}
          loading={threadCreating}
        />
      )}
      <Prompt
        ref={$prompt}
        {...askPrompt}
        onCreateResponse={onCreateResponse}
      />
    </SiderLayout>
  );
}
