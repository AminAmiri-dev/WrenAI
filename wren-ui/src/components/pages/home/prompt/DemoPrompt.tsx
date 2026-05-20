import { Row, Col } from 'antd';
import styled from 'styled-components';
import { makeIterable } from '@/utils/iteration';
import EllipsisWrapper from '@/components/EllipsisWrapper';

const DemoBlock = styled.div`
  user-select: none;
  position: relative;
  height: 150px;
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.98),
      rgba(250, 250, 249, 0.98)
    ),
    #fff;
  border-color: rgba(15, 23, 42, 0.1) !important;
  border-radius: 16px !important;
  box-shadow:
    rgba(15, 23, 42, 0.05) 0 10px 24px -18px,
    rgba(15, 23, 42, 0.04) 0 1px 0;
  transition:
    border-color ease 0.2s,
    box-shadow ease 0.2s,
    transform ease 0.2s;

  .demo-label {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0 10px;
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 999px;
    background: #fff;
    color: #555;
    font-size: 11px;
    font-weight: 500;
  }

  .demo-question {
    color: #272727;
    font-size: 13px;
    line-height: 1.72;
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.22) !important;
    box-shadow:
      rgba(15, 23, 42, 0.08) 0 18px 38px -24px,
      rgba(15, 23, 42, 0.06) 0 1px 0;
    transform: translateY(-2px);
  }
`;

interface Props {
  demo: any[];
  onSelect: (data: { label: string; question: string }) => void;
}

const DemoTemplate = ({ label, question, onSelect }) => {
  return (
    <Col span={8}>
      <DemoBlock
        className="border border-gray-5 rounded px-3 pt-3 pb-4 cursor-pointer"
        onClick={() => onSelect({ label, question })}
      >
        <div className="d-flex justify-space-between align-center text-sm mb-3">
          <div className="demo-label">{label}</div>
        </div>
        <div className="demo-question">
          <EllipsisWrapper multipleLine={4} text={question} />
        </div>
      </DemoBlock>
    </Col>
  );
};

const DemoColumnIterator = makeIterable(DemoTemplate);

export default function DemoPrompt(props: Props) {
  const { demo, onSelect } = props;
  return (
    <div className="gray-8" style={{ width: 580, maxWidth: '100%' }}>
      <div className="text-center mt-3 mb-3 gray-7">
        این سوال ها را امتحان کنید...
      </div>
      <Row gutter={16}>
        <DemoColumnIterator data={demo} onSelect={onSelect} />
      </Row>
    </div>
  );
}
