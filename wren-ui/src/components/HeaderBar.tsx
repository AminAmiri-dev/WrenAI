import { useRouter } from 'next/router';
import { Button, Layout, Space } from 'antd';
import styled from 'styled-components';
import LogoBar from '@/components/LogoBar';
import { Path } from '@/utils/enum';
import Deploy from '@/components/deploy/Deploy';

const { Header } = Layout;

const StyledButton = styled(Button)<{ $isHighlight: boolean }>`
  min-width: 52px;
  height: 30px;
  padding: 0 14px;
  border: 1px solid
    ${(props) =>
      props.$isHighlight ? 'rgba(255, 255, 255, 0.18)' : 'transparent'};
  border-radius: 999px;
  background: ${(props) =>
    props.$isHighlight ? 'rgba(255, 255, 255, 0.16)' : 'transparent'};
  color: ${(props) =>
    props.$isHighlight ? 'var(--gray-1)' : 'rgba(255, 255, 255, 0.78)'};
  font-size: 13px;
  font-weight: ${(props) => (props.$isHighlight ? '700' : '500')};
  line-height: 28px;
  transition:
    background-color 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease;

  &:hover,
  &:focus {
    background: ${(props) =>
      props.$isHighlight
        ? 'rgba(255, 255, 255, 0.18)'
        : 'rgba(255, 255, 255, 0.08)'};
    color: var(--gray-1);
    border-color: rgba(255, 255, 255, 0.16);
  }
`;

const StyledHeader = styled(Header)`
  height: 52px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, #262626 0%, #1f1f1f 100%);
  padding: 10px 18px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset;

  .adm-header-inner {
    height: 32px;
  }
`;

export default function HeaderBar() {
  const router = useRouter();
  const { pathname } = router;
  const showNav = !pathname.startsWith(Path.Onboarding);
  const isModeling = pathname.startsWith(Path.Modeling);

  return (
    <StyledHeader>
      <div className="adm-header-inner d-flex justify-space-between align-center">
        <Space size={[40, 0]}>
          <LogoBar />
          {showNav && (
            <Space size={[8, 0]}>
              <StyledButton
                shape="round"
                size="small"
                $isHighlight={pathname.startsWith(Path.Home)}
                onClick={() => router.push(Path.Home)}
              >
                Home
              </StyledButton>
              <StyledButton
                shape="round"
                size="small"
                $isHighlight={pathname.startsWith(Path.Modeling)}
                onClick={() => router.push(Path.Modeling)}
              >
                Modeling
              </StyledButton>
              <StyledButton
                shape="round"
                size="small"
                $isHighlight={pathname.startsWith(Path.Knowledge)}
                onClick={() => router.push(Path.KnowledgeQuestionSQLPairs)}
              >
                Knowledge
              </StyledButton>
              <StyledButton
                shape="round"
                size="small"
                $isHighlight={pathname.startsWith(Path.APIManagement)}
                onClick={() => router.push(Path.APIManagementHistory)}
              >
                API
              </StyledButton>
            </Space>
          )}
        </Space>
        {isModeling && (
          <Space size={[16, 0]}>
            <Deploy />
          </Space>
        )}
      </div>
    </StyledHeader>
  );
}
