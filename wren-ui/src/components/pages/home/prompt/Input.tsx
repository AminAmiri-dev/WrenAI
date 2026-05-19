import { useEffect, useRef, useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import ArrowUpOutlined from '@ant-design/icons/ArrowUpOutlined';
import { attachLoading } from '@/utils/helper';

const InputShell = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
`;

const StyledTextArea = styled(Input.TextArea)`
  flex: 1;
  padding: 10px 4px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none !important;
  color: var(--gray-10);
  font-size: 15px;
  line-height: 1.7;
  resize: none;

  &.ant-input {
    min-height: 44px;
    max-height: 164px;
  }

  &::placeholder {
    color: var(--gray-6);
  }

  &:focus,
  &:hover {
    border: 0;
    box-shadow: none;
  }
`;

const PromptButton = styled(Button)`
  width: 42px;
  min-width: 42px;
  height: 42px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  .anticon {
    font-size: 17px;
  }
`;

interface Props {
  question: string;
  isProcessing: boolean;
  onAsk: (value: string) => Promise<void>;
  inputProps: {
    placeholder?: string;
  };
}

export default function PromptInput(props: Props) {
  const { onAsk, isProcessing, question, inputProps } = props;
  const $promptInput = useRef<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [innerLoading, setInnerLoading] = useState(false);

  useEffect(() => {
    if (question) setInputValue(question);
  }, [question]);

  useEffect(() => {
    if (!isProcessing) {
      $promptInput.current?.focus();
      setInputValue('');
    }
  }, [isProcessing]);

  const syncInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleAsk = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    const startAsking = attachLoading(onAsk, setInnerLoading);
    startAsking(trimmedValue);
  };

  const inputEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.shiftKey) return;
    event.preventDefault();
    handleAsk();
  };

  const isDisabled = innerLoading || isProcessing;

  return (
    <InputShell>
      <StyledTextArea
        ref={$promptInput}
        // disable grammarly
        data-gramm="false"
        size="large"
        autoSize={{ minRows: 1, maxRows: 5 }}
        value={inputValue}
        onInput={syncInputValue}
        onPressEnter={inputEnter}
        disabled={isDisabled}
        {...inputProps}
      />
      <PromptButton
        type="primary"
        size="large"
        icon={<ArrowUpOutlined />}
        onClick={handleAsk}
        disabled={isDisabled}
        aria-label="پرسیدن"
      />
    </InputShell>
  );
}
