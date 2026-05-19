import { useEffect, useRef, useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import ArrowUpOutlined from '@ant-design/icons/ArrowUpOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { attachLoading } from '@/utils/helper';

const InputShell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  direction: rtl;
  min-height: 50px;
`;

const StyledTextArea = styled(Input.TextArea)`
  flex: 1;
  padding: 10px 2px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none !important;
  color: var(--gray-10);
  font-size: 15px;
  line-height: 1.7;
  resize: none;
  text-align: right;

  &.ant-input {
    min-height: 42px;
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

const UtilityButton = styled(Button)`
  width: 38px;
  min-width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  color: var(--gray-8);
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover,
  &:focus {
    color: var(--gray-10);
    background: var(--gray-3);
  }

  .anticon {
    font-size: 17px;
  }

  @media (max-width: 520px) {
    width: 34px;
    min-width: 34px;
    height: 34px;
  }
`;

const InputActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex: none;
`;

const ModeButton = styled(Button)`
  height: 36px;
  padding: 0 10px;
  border: 0;
  color: var(--gray-7);
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;

  &:hover,
  &:focus {
    color: var(--gray-9);
    background: var(--gray-3);
  }

  .anticon {
    font-size: 10px;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

const PromptButton = styled(Button)`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: var(--gray-10);
  color: var(--gray-1);
  box-shadow: rgba(15, 23, 42, 0.16) 0 8px 18px -10px;

  &:hover,
  &:focus {
    background: var(--geekblue-6) !important;
    color: var(--gray-1) !important;
  }

  &[disabled],
  &[disabled]:hover {
    background: var(--gray-5) !important;
    color: var(--gray-1) !important;
    opacity: 0.76;
  }

  .anticon {
    font-size: 18px;
  }

  @media (max-width: 520px) {
    width: 38px;
    min-width: 38px;
    height: 38px;
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
      <UtilityButton
        type="text"
        icon={<PlusOutlined />}
        onClick={() => $promptInput.current?.focus()}
        aria-label="افزودن"
      />
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
      <InputActions>
        <ModeButton type="text" onClick={() => $promptInput.current?.focus()}>
          تفکر
          <DownOutlined />
        </ModeButton>
        <PromptButton
          type="primary"
          size="large"
          icon={<ArrowUpOutlined />}
          onClick={handleAsk}
          disabled={isDisabled}
          aria-label="پرسیدن"
        />
      </InputActions>
    </InputShell>
  );
}
