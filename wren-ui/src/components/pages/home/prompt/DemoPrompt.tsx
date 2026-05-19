import { Row, Col } from 'antd';
import styled from 'styled-components';
import { makeIterable } from '@/utils/iteration';
import EllipsisWrapper from '@/components/EllipsisWrapper';

const DemoBlock = styled.div`
  user-select: none;
  height: 150px;
  background: white;
  border-radius: 8px;
  box-shadow: rgba(15, 23, 42, 0.04) 0 8px 22px -14px;
  transition:
    border-color ease 0.2s,
    box-shadow ease 0.2s,
    transform ease 0.2s;

  &:hover {
    border-color: var(--geekblue-6) !important;
    box-shadow: rgba(47, 84, 235, 0.14) 0 16px 34px -22px;
    transform: translateY(-1px);
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
          <div className="border border-gray-5 px-2 rounded-pill">{label}</div>
        </div>
        <EllipsisWrapper multipleLine={4} text={question} />
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
