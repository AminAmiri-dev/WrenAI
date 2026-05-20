import { Button, Modal, Select, Row, Col, Form, message } from 'antd';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Path } from '@/utils/enum';
import {
  useResetCurrentProjectMutation,
  useUpdateCurrentProjectMutation,
} from '@/apollo/client/graphql/settings.generated';
import { getLanguageText } from '@/utils/language';
import { ProjectLanguage } from '@/apollo/client/graphql/__types__';

interface Props {
  data: { language: string };
}

const ResetSection = styled.div`
  margin-top: 26px;
  text-align: center;

  .reset-title {
    color: var(--gray-8);
    font-weight: 600;
    margin-bottom: 10px;
  }

  .reset-description {
    color: var(--gray-6);
    margin: 8px auto 0;
    max-width: 520px;
    line-height: 1.8;
  }
`;

export default function ProjectSettings(props: Props) {
  const { data } = props;
  const router = useRouter();
  const [form] = Form.useForm();
  const [resetCurrentProject, { client }] = useResetCurrentProjectMutation({
    onError: (error) => console.error(error),
  });
  const languageOptions = Object.keys(ProjectLanguage).map((key) => {
    return { label: getLanguageText(key as ProjectLanguage), value: key };
  });

  const [updateCurrentProject, { loading }] = useUpdateCurrentProjectMutation({
    refetchQueries: ['GetSettings'],
    onError: (error) => console.error(error),
    onCompleted: () => {
      message.success('Successfully updated project language.');
    },
  });

  const reset = () => {
    Modal.confirm({
      title: 'Are you sure you want to reset?',
      okButtonProps: { danger: true },
      okText: 'Reset',
      onOk: async () => {
        await resetCurrentProject();
        client.clearStore();
        router.push(Path.OnboardingConnection);
      },
    });
  };

  const submit = () => {
    form
      .validateFields()
      .then((values) => {
        updateCurrentProject({ variables: { data: values } });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="py-3 px-4">
      <Form
        form={form}
        layout="vertical"
        initialValues={{ language: data.language }}
      >
        <Form.Item
          label="Project language"
          extra="This setting will affect the language in which the AI responds to you."
        >
          <Row gutter={16} wrap={false}>
            <Col className="flex-grow-1">
              <Form.Item name="language" noStyle>
                <Select
                  placeholder="Select a language"
                  showSearch
                  options={languageOptions}
                />
              </Form.Item>
            </Col>
            <Col>
              <Button
                type="primary"
                style={{ width: 70 }}
                onClick={submit}
                loading={loading}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      <ResetSection>
        <div className="reset-title">Reset project</div>
        <Button type="primary" style={{ minWidth: 92 }} danger onClick={reset}>
          Reset
        </Button>
        <div className="reset-description">
          Please be aware that resetting will delete all current settings and
          records, including those in the Modeling Page and Home Page threads.
        </div>
      </ResetSection>
    </div>
  );
}
