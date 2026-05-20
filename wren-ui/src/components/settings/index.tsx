import { useEffect, useMemo, useState } from 'react';
import { Modal, Layout, Button } from 'antd';
import styled from 'styled-components';
import { SETTINGS } from '@/utils/enum';
import { makeIterable } from '@/utils/iteration';
import { ModalAction } from '@/hooks/useModalAction';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import DataSourceSettings from './DataSourceSettings';
import ProjectSettings from './ProjectSettings';
import { getSettingMenu } from './utils';
import {
  useGetSettingsLazyQuery,
  GetSettingsQuery,
} from '@/apollo/client/graphql/settings.generated';

const { Sider, Content } = Layout;

type Props = ModalAction<any, any> & {
  loading?: boolean;
};

const StyledSider = styled(Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    overflow: hidden;
  }
  .ant-modal-close-x {
    width: 48px;
    height: 48px;
    line-height: 48px;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  margin-bottom: 4px;
`;

const VersionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  margin: 0 16px 16px;
  padding: 10px 12px;
  border: 1px solid var(--gray-4);
  border-radius: 8px;
  background: var(--gray-2);
  direction: rtl;

  .version-icon {
    flex: 0 0 auto;
    color: var(--geekblue-6);
    font-size: 14px;
  }

  .version-label {
    flex: 0 0 auto;
    color: var(--gray-8);
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
  }

  .version-value {
    flex: 1 1 auto;
    min-width: 0;
    color: var(--gray-7);
    direction: ltr;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', monospace;
    font-size: 11px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    unicode-bidi: plaintext;
    white-space: nowrap;
  }
`;

const DynamicComponent = ({
  menu,
  data,
  refetch,
  closeModal,
}: {
  menu: SETTINGS;
  data?: GetSettingsQuery['settings'];
  refetch: () => void;
  closeModal: () => void;
}) => {
  const { dataSource, language } = data || {};
  return (
    {
      [SETTINGS.DATA_SOURCE]: (
        <DataSourceSettings
          type={dataSource?.type}
          sampleDataset={dataSource?.sampleDataset}
          properties={dataSource?.properties}
          refetchSettings={refetch}
          closeModal={closeModal}
        />
      ),
      [SETTINGS.PROJECT]: <ProjectSettings data={{ language }} />,
    }[menu] || null
  );
};

const MenuTemplate = ({ currentMenu, value, onClick }) => {
  const current = getSettingMenu(value);
  return (
    <StyledButton
      className={currentMenu === value ? 'geekblue-6 bg-gray-4' : 'gray-8'}
      type="text"
      block
      onClick={() => onClick({ value })}
      icon={<current.icon />}
    >
      {current.label}
    </StyledButton>
  );
};

const MenuIterator = makeIterable(MenuTemplate);

export default function Settings(props: Props) {
  const { onClose, visible } = props;
  const [menu, setMenu] = useState<SETTINGS>(SETTINGS.DATA_SOURCE);
  const current = getSettingMenu(menu);
  const menuList = Object.keys(SETTINGS).map((key) => ({
    key,
    value: SETTINGS[key],
  }));
  const [fetchSettings, { data, refetch }] = useGetSettingsLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  const productVersion = useMemo(() => {
    return data?.settings?.productVersion;
  }, [data?.settings]);

  useEffect(() => {
    if (visible) fetchSettings();
  }, [visible]);

  const onMenuClick = ({ value }) => setMenu(value);

  return (
    <StyledModal
      width={950}
      bodyStyle={{ padding: 0, height: 700 }}
      visible={visible}
      footer={null}
      onCancel={onClose}
      destroyOnClose
      centered
    >
      <Layout style={{ height: '100%' }}>
        <StyledSider width={310} className="border-r border-gray-4">
          <div className="gray-9 text-bold py-3 px-5">
            <SettingOutlined className="mr-2" />
            تنظیمات
          </div>
          <div className="p-3 flex-grow-1">
            <MenuIterator
              data={menuList}
              currentMenu={menu}
              onClick={onMenuClick}
            />
          </div>
          {!!productVersion && (
            <VersionInfo title={`نسخه داده یار: ${productVersion}`}>
              <InfoCircleOutlined className="version-icon" />
              <span className="version-label">نسخه داده یار</span>
              <span className="version-value">{productVersion}</span>
            </VersionInfo>
          )}
        </StyledSider>
        <Content className="d-flex flex-column">
          <div className="d-flex align-center gray-9 border-b border-gray-4 text-bold py-3 px-4">
            <current.icon className="mr-2" />
            {current.label}
          </div>
          <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
            <DynamicComponent
              menu={menu}
              data={data?.settings}
              refetch={refetch}
              closeModal={onClose}
            />
          </div>
        </Content>
      </Layout>
    </StyledModal>
  );
}
