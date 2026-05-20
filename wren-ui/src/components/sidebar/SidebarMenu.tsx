import React from 'react';
import styled from 'styled-components';
import { Menu, MenuProps } from 'antd';

const StyledMenu = styled(Menu)`
  &.ant-menu {
    background-color: transparent;
    border-right: 0;
    color: #3d3d3a;
    padding: 2px 0;

    &:not(.ant-menu-horizontal) {
      .ant-menu-item-selected {
        color: #202020;
        background-color: #ececea;
      }
    }

    .ant-menu-item-group {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }

    .ant-menu-item-group-title {
      font-size: 12px;
      font-weight: 600;
      color: #7a7a75;
      padding: 8px 12px 5px;
    }

    .ant-menu-item {
      min-height: 38px;
      height: auto;
      margin: 1px 0;
      padding: 8px 12px !important;
      border-radius: 10px;
      line-height: 20px;
      font-size: 13px;
      font-weight: 500;

      &:not(last-child) {
        margin-bottom: 0;
      }

      &:not(.ant-menu-item-disabled):hover {
        color: inherit;
        background-color: #efefed;
      }

      &:not(.ant-menu-item-disabled):active {
        background-color: #e6e6e3;
      }

      &:active {
        background-color: transparent;
      }

      &-selected {
        color: #202020;
        font-weight: 700;

        &:after {
          display: none;
        }

        &:hover {
          color: #202020;
        }
      }
    }
  }
`;

export default function SidebarMenu({
  items,
  selectedKeys,
  onSelect,
}: MenuProps) {
  return (
    <StyledMenu
      mode="inline"
      items={items}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
    />
  );
}
