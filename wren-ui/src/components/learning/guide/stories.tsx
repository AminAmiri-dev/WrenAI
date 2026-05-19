import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { NextRouter } from 'next/router';
import { Select } from 'antd';
import styled from 'styled-components';
import { ModelIcon, TranslateIcon } from '@/utils/icons';
import { RobotSVG } from '@/utils/svgs';
import { renderToString } from 'react-dom/server';
import {
  Dispatcher,
  DriverConfig,
  DriverObj,
  DriverPopoverDOM,
  LEARNING,
} from './utils';
import { Path } from '@/utils/enum';
import {
  ProjectLanguage,
  SampleDatasetName,
} from '@/apollo/client/graphql/__types__';
import { TEMPLATE_OPTIONS as SAMPLE_DATASET_INFO } from '@/components/pages/setup/utils';
import { getLanguageText } from '@/utils/language';
import * as events from '@/utils/events';
import { nextTick } from '@/utils/time';

const RobotIcon = styled(RobotSVG)`
  width: 24px;
  height: 24px;
`;

const defaultConfigs: DriverConfig = {
  progressText: '{{current}} / {{total}}',
  nextBtnText: 'بعدی',
  prevBtnText: 'قبلی',
  showButtons: ['next'],
  allowClose: false,
};

type StoryPayload = {
  sampleDataset: SampleDatasetName;
  language: ProjectLanguage;
};

export const makeStoriesPlayer =
  (...args: [DriverObj, NextRouter, StoryPayload]) =>
  (id: string, dispatcher: Dispatcher) => {
    const action =
      {
        [LEARNING.DATA_MODELING_GUIDE]: () =>
          playDataModelingGuide(...args, dispatcher),
        [LEARNING.SWITCH_PROJECT_LANGUAGE]: () =>
          playSwitchProjectLanguageGuide(...args, dispatcher),
        [LEARNING.KNOWLEDGE_GUIDE]: () =>
          playKnowledgeGuide(...args, dispatcher),
        [LEARNING.SAVE_TO_KNOWLEDGE]: () =>
          playSaveToKnowledgeGuide(...args, dispatcher),
      }[id] || null;
    return action && action();
  };

const resetPopoverStyle = (popoverDom: DriverPopoverDOM, width: number) => {
  const wrapper = popoverDom.wrapper;
  wrapper.style.maxWidth = 'none';
  wrapper.style.width = `${width}px`;
};

const playDataModelingGuide = (
  $driver: DriverObj,
  router: NextRouter,
  payload: StoryPayload,
  dispatcher: Dispatcher,
) => {
  if ($driver === null) {
    console.error('Driver object is not initialized.');
    return;
  }
  if ($driver.isActive()) $driver.destroy();

  const isSampleDataset = !!payload.sampleDataset;
  const sampleDatasetInfo = SAMPLE_DATASET_INFO[payload.sampleDataset];

  $driver.setConfig({ ...defaultConfigs, showProgress: true });
  $driver.setSteps([
    {
      popover: {
        title: renderToString(
          <div className="pt-4">
            <div className="-mx-4" style={{ minHeight: 331 }}>
              <img
                className="mb-4"
                src="/images/learning/data-modeling.jpg"
                alt="data-modeling-guide"
              />
            </div>
            راهنمای مدل سازی داده
          </div>,
        ),
        description: renderToString(
          <>
            مدل سازی داده یک لایه منطقی روی schema اصلی داده شما ایجاد می کند و
            رابطه ها، معناشناسی و محاسبات را منظم می سازد. این کار به AI کمک می
            کند با منطق کسب وکار هماهنگ شود، داده دقیق را پیدا کند و بینش
            معنادار بسازد.{' '}
            <a
              href="https://docs.getwren.ai/oss/guide/modeling/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              جزئیات بیشتر
            </a>
            <br />
            <br />
            {isSampleDataset ? (
              <>
                برای نمایش راهنما از دیتاست {sampleDatasetInfo.label} استفاده می
                کنیم. برای اطلاعات بیشتر، اینجا را ببینید:{' '}
                <a
                  href={sampleDatasetInfo.guide}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  درباره دیتاست {sampleDatasetInfo.label}.
                </a>
              </>
            ) : null}
          </>,
        ),
        showButtons: ['next', 'close'],
        onPopoverRender: (popoverDom: DriverPopoverDOM) => {
          resetPopoverStyle(popoverDom, 720);
        },
        onCloseClick: () => {
          $driver.destroy();
          window.sessionStorage.setItem('skipDataModelingGuide', '1');
        },
      },
    },
    {
      element: '[data-guideid="add-model"]',
      popover: {
        title: renderToString(
          <>
            <div className="mb-1">
              <ModelIcon style={{ fontSize: 24 }} />
            </div>
            ساخت مدل
          </>,
        ),
        description: renderToString(
          <>برای ساخت اولین مدل، روی آیکن افزودن کلیک کنید.</>,
        ),
      },
    },
    {
      element: '[data-guideid="edit-model-0"]',
      popover: {
        title: renderToString(
          <>
            <div className="-mx-4" style={{ minHeight: 175 }}>
              <img
                className="mb-2"
                src="/images/learning/edit-model.gif"
                alt="edit-model"
              />
            </div>
            ویرایش مدل
          </>,
        ),
        description: renderToString(
          <>
            برای به روزرسانی ستون های مدل یا حذف آن، روی آیکن بیشتر کلیک کنید.
          </>,
        ),
      },
    },
    {
      element: '[data-guideid="model-0"]',
      popover: {
        title: renderToString(
          <>
            <div className="-mx-4" style={{ minHeight: 214 }}>
              <img
                className="mb-2"
                src="/images/learning/edit-metadata.gif"
                alt="edit-metadata"
              />
            </div>
            ویرایش فراداده
          </>,
        ),
        description: renderToString(
          <>می توانید نام مستعار و توضیحات مدل ها و ستون ها را ویرایش کنید.</>,
        ),
        onPopoverRender: (popoverDom: DriverPopoverDOM) => {
          resetPopoverStyle(popoverDom, 360);
        },
      },
    },
    {
      element: '[data-guideid="deploy-model"]',
      popover: {
        title: renderToString(
          <>
            <div className="-mx-4" style={{ minHeight: 102 }}>
              <img
                className="mb-2"
                src="/images/learning/deploy-modeling.jpg"
                alt="deploy-modeling"
              />
            </div>
            استقرار مدل سازی
          </>,
        ),
        description: renderToString(
          <>بعد از ویرایش مدل ها، فراموش نکنید تغییرات را مستقر کنید.</>,
        ),
      },
    },
    {
      popover: {
        title: renderToString(
          <>
            <div className="-mx-4" style={{ minHeight: 331 }}>
              <img
                className="mb-2"
                src="/images/learning/ask-question.jpg"
                alt="ask-question"
              />
            </div>
            پرسیدن سوال
          </>,
        ),
        description: renderToString(
          <>
            وقتی ویرایش مدل ها تمام شد، به «خانه» بروید و سوال پرسیدن را شروع
            کنید.
          </>,
        ),
        onPopoverRender: (popoverDom: DriverPopoverDOM) => {
          resetPopoverStyle(popoverDom, 720);
        },
        doneBtnText: 'رفتن به خانه',
        onNextClick: () => {
          router.push(Path.Home);
          $driver.destroy();
          dispatcher?.onDone && dispatcher.onDone();
        },
      },
    },
  ]);
  events.dispatch(events.EVENT_NAME.GO_TO_FIRST_MODEL);
  $driver.drive();
};

// React component for home guide
const LanguageSwitcher = (props: { defaultValue: ProjectLanguage }) => {
  const [value, setValue] = useState(props.defaultValue);
  const languageOptions = Object.keys(ProjectLanguage).map((key) => {
    return { label: getLanguageText(key as ProjectLanguage), value: key };
  });
  const onChange = (value: string) => {
    setValue(value as ProjectLanguage);
  };

  return (
    <>
      <label className="d-block mb-2">زبان پروژه</label>
      <Select
        showSearch
        style={{ width: '100%' }}
        options={languageOptions}
        getPopupContainer={(trigger) => trigger.parentElement}
        onChange={onChange}
        value={value}
      />
      <input name="language" type="hidden" value={value} />
    </>
  );
};

const playSwitchProjectLanguageGuide = (
  $driver: DriverObj,
  _router: NextRouter,
  payload: StoryPayload,
  dispatcher: Dispatcher,
) => {
  if ($driver === null) {
    console.error('Driver object is not initialized.');
    return;
  }
  if ($driver.isActive()) $driver.destroy();

  $driver.setConfig({ ...defaultConfigs, showProgress: false });
  $driver.setSteps([
    {
      popover: {
        title: renderToString(
          <>
            <div className="mb-1">
              <TranslateIcon style={{ fontSize: 24 }} />
            </div>
            تغییر زبان
          </>,
        ),
        description: renderToString(
          <>
            زبان دلخواهتان را انتخاب کنید. بعد از تنظیم، AI با همان زبان پاسخ می
            دهد.
            <div className="my-3">
              <div id="projectLanguageContainer" />
            </div>
            اگر بعدا نظرتان عوض شد، می توانید آن را از تنظیمات پروژه تغییر دهید.
          </>,
        ),
        onPopoverRender: (popoverDom: DriverPopoverDOM) => {
          resetPopoverStyle(popoverDom, 400);
          // Render react component to #projectLanguageContainer
          const selectDom = document.getElementById('projectLanguageContainer');
          if (selectDom) {
            createRoot(selectDom).render(
              <LanguageSwitcher defaultValue={payload.language} />,
            );
          }
        },
        showButtons: ['next', 'close'],
        nextBtnText: 'ثبت',
        onCloseClick: () => {
          $driver.destroy();
          window.sessionStorage.setItem('skipSwitchProjectLanguageGuide', '1');
        },
        onNextClick: async () => {
          const selectDom = document.getElementById('projectLanguageContainer');
          if (selectDom) {
            const input = selectDom.querySelector(
              'input[name="language"]',
            ) as HTMLInputElement;
            const nextButton = document.querySelectorAll(
              '.driver-popover-next-btn',
            )[0];

            const loadingSvg = document.createElement('span');
            loadingSvg.setAttribute('aria-hidden', 'loading');
            loadingSvg.setAttribute('role', 'img');
            loadingSvg.className =
              'anticon anticon-loading anticon-spin text-sm gray-6 ml-2';
            loadingSvg.innerHTML = `<svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>`;
            nextButton.setAttribute('disabled', 'true');
            nextButton.appendChild(loadingSvg);
            await dispatcher
              ?.onSaveLanguage(input.value as ProjectLanguage)
              .catch((err) => console.error(err))
              .finally(() => {
                nextButton.removeAttribute('disabled');
                nextButton.removeChild(loadingSvg);
              });
          }
          $driver.destroy();
          dispatcher?.onDone();
        },
      },
    },
  ]);
  $driver.drive();
};

const playKnowledgeGuide = (
  $driver: DriverObj,
  _router: NextRouter,
  _payload: StoryPayload,
  dispatcher: Dispatcher,
) => {
  if ($driver === null) {
    console.error('Driver object is not initialized.');
    return;
  }

  if ($driver.isActive()) $driver.destroy();

  $driver.setConfig({ ...defaultConfigs, showProgress: true });

  $driver.setSteps([
    {
      element: '[data-guideid="question-sql-pairs"]',
      popover: {
        title: renderToString(
          <div className="pt-4">
            <div className="-mx-4" style={{ minHeight: 317 }}>
              <img
                className="mb-4"
                src="/images/learning/save-to-knowledge.gif"
                alt="question-sql-pairs-guide"
              />
            </div>
            ساخت پایگاه دانش: جفت های سوال و SQL
          </div>,
        ),
        description: renderToString(
          <>
            برای بهبود تولید SQL در داده یار، <b>جفت های سوال و SQL</b> بسازید و
            مدیریت کنید. می توانید اینجا دستی جفت اضافه کنید یا به خانه بروید،
            سوال بپرسید و پاسخ درست را در دانش ذخیره کنید.
          </>,
        ),
        onPopoverRender: (popoverDom: DriverPopoverDOM) => {
          resetPopoverStyle(popoverDom, 640);
        },
      },
    },
    {
      element: '[data-guideid="instructions"]',
      popover: {
        title: renderToString(
          <div className="pt-4">
            <div className="-mx-4" style={{ minHeight: 260 }}>
              <img
                className="mb-4"
                src="/images/learning/instructions.png"
                alt="instructions-guide"
              />
            </div>
            ساخت پایگاه دانش: دستورالعمل ها
          </div>,
        ),
        description: renderToString(
          <>
            علاوه بر جفت های سوال و SQL، می توانید دستورالعمل هایی برای تعریف{' '}
            <b>قوانین کسب وکار</b> و <b>منطق پرس وجو</b> بسازید. این قوانین به
            داده یار کمک می کنند فیلترها، محدودیت ها و بهترین روش ها را در پرس
            وجوهای SQL یکدست اعمال کند.
          </>,
        ),
        onPopoverRender: (popoverDom: DriverPopoverDOM) => {
          resetPopoverStyle(popoverDom, 520);
        },
        doneBtnText: 'متوجه شدم',
        onNextClick: () => {
          $driver.destroy();
          dispatcher?.onDone && dispatcher.onDone();
        },
      },
    },
  ]);
  $driver.drive();
};

const playSaveToKnowledgeGuide = async (
  $driver: DriverObj,
  _router: NextRouter,
  _payload: StoryPayload,
  dispatcher: Dispatcher,
) => {
  if ($driver === null) {
    console.error('Driver object is not initialized.');
    return;
  }
  if ($driver.isActive()) $driver.destroy();

  $driver.setConfig({ ...defaultConfigs, showProgress: false });

  const selectors = {
    saveToKnowledge:
      '[data-guideid="last-answer-result"] [data-guideid="save-to-knowledge"]',
    previewData:
      '[data-guideid="last-answer-result"] [data-guideid="text-answer-preview-data"]',
  };

  $driver.setSteps([
    {
      element: selectors.saveToKnowledge,
      popover: {
        side: 'top',
        align: 'start',
        title: renderToString(
          <>
            <div className="mb-1">
              <RobotIcon />
            </div>
            ذخیره در دانش
          </>,
        ),
        description: renderToString(
          <>
            اگر پاسخ تولید شده توسط AI درست است، آن را به عنوان{' '}
            <b>جفت سوال و SQL</b> ذخیره کنید تا یادگیری AI بهتر شود. اگر درست
            نیست، قبل از ذخیره با سوال های تکمیلی اصلاحش کنید.
          </>,
        ),
        onPopoverRender: (popoverDom: DriverPopoverDOM) => {
          resetPopoverStyle(popoverDom, 360);
        },
        doneBtnText: 'متوجه شدم',
        onNextClick: () => {
          $driver.destroy();
          dispatcher?.onDone && dispatcher.onDone();
        },
      },
    },
  ]);

  let mutationObserver: MutationObserver | null = null;
  let intersectionObserver: IntersectionObserver | null = null;

  const cleanMutationObserverup = () => {
    // if MutationObserver is listening to the element, disable it
    if (mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver = null;
    }
  };

  const cleanIntersectionObserverup = () => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
      intersectionObserver = null;
    }
  };

  const startDriver = () => {
    const target = document.querySelector(
      selectors.previewData,
    ) as HTMLElement | null;

    if (!target) return false;

    cleanMutationObserverup();

    // use IntersectionObserver to ensure the element is in viewport before driving
    intersectionObserver = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            cleanIntersectionObserverup();

            await nextTick(700);
            $driver.drive();
            return;
          }
        }
      },
      { threshold: 0.5 }, // 50% of the element is visible
    );

    intersectionObserver.observe(target);
    return true;
  };

  // try to start Driver.js
  if (startDriver()) return;

  // if the target element not appear, use MutationObserver to listen DOM changes
  mutationObserver = new MutationObserver(() => {
    if (startDriver()) {
      cleanMutationObserverup();
    }
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  // 60 seconds after, observer will be cleared
  await nextTick(60000);
  cleanMutationObserverup();
  cleanIntersectionObserverup();
};
