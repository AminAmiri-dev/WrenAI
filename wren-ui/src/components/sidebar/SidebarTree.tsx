import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Tree, TreeProps } from 'antd';

const anticonStyle = css`
  [class^='anticon anticon-'] {
    transition: background-color ease-out 0.12s;
    border-radius: 6px;
    width: 16px;
    height: 16px;
    font-size: 14px;
    vertical-align: middle;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }

    &[disabled] {
      cursor: not-allowed;
      color: var(--gray-6);
      &:hover,
      &:active {
        background-color: transparent;
      }
    }
  }
  .anticon + .anticon {
    margin-left: 4px;
  }
`;

const StyledTree = styled(Tree)`
  &.ant-tree {
    background-color: transparent;
    color: #3d3d3a;
    font-size: 13px;

    .ant-tree-indent-unit {
      width: 10px;
    }

    .ant-tree-node-content-wrapper {
      display: flex;
      align-items: center;
      line-height: 20px;
      min-height: 36px;
      min-width: 1px;
      padding: 0;
    }

    .ant-tree-node-content-wrapper:hover,
    .ant-tree-node-content-wrapper.ant-tree-node-selected {
      background-color: transparent;
    }

    .ant-tree-treenode {
      margin: 1px 0;
      padding: 0 10px;
      border-radius: 10px;
      background-color: transparent;
      transition:
        background-color ease-out 0.14s,
        color ease-out 0.14s;

      &-selected {
        color: #202020;
        background-color: #ececea;
      }

      .ant-tree-switcher {
        width: 14px;
        align-self: center;
        .ant-tree-switcher-icon {
          font-size: 12px;
          vertical-align: middle;
        }
        ${anticonStyle}
      }

      .ant-tree-iconEle {
        flex-shrink: 0;
      }
    }

    .adm {
      &-treeTitle__title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &-treeNode {
        &:hover {
          background-color: #efefed;
        }
        &:active {
          background-color: #e6e6e3;
        }

        .ant-tree-title {
          display: inline-flex;
          flex-wrap: nowrap;
          min-width: 1px;
        }

        &--relation,
        &--primary {
          margin-left: 4px;
        }

        &--group {
          color: #7a7a75;
          margin-top: 14px;
          font-size: 12px;
          font-weight: 600;

          .ant-tree-switcher-noop {
            display: none;
          }

          > * {
            cursor: inherit;
          }
        }

        &--empty {
          color: #969691;
          font-size: 12px;
          .ant-tree-switcher {
            display: none;
          }
          .ant-tree-node-content-wrapper {
            min-height: auto;
          }
        }

        &--selectNode {
          * {
            cursor: auto;
          }
          &:hover,
          &:active {
            background-color: transparent;
          }
        }

        &--subtitle {
          color: #858580;
          font-size: 12px;
          font-weight: 600;
          .ant-tree-switcher {
            display: none;
          }
          .ant-tree-node-content-wrapper {
            min-height: auto;
          }
        }

        &--selectNone {
          * {
            cursor: auto;
          }
          &:hover,
          &:active {
            background-color: transparent;
          }
        }
      }

      &-actionIcon {
        font-size: 14px;
        border-radius: 8px;
        margin-right: -3px;
        color: #777772;
        &:not(.adm-actionIcon--disabled) {
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.08);
          }
        }
        .anticon {
          padding: 2px;
          cursor: inherit;
        }
        &--disabled {
          color: var(--gray-6);
          cursor: not-allowed;
        }
      }
    }
  }
`;

export const sidebarCommonStyle = css`
  .ant-tree-title {
    flex-grow: 1;
    display: inline-flex;
    align-items: center;
    span:first-child,
    .adm-treeTitle__title {
      flex-grow: 1;
    }
  }
`;

export const StyledTreeNodeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  margin: 2px 0 10px;
  padding: 8px 12px;
  min-height: 38px;
  border-radius: 10px;
  color: #3d3d3a;
  font-size: 13px;
  font-weight: 500;
  transition:
    background-color 0.14s ease,
    color 0.14s ease;
  &:hover {
    background-color: #efefed;
    color: #202020;
  }
  &:active {
    background-color: #e6e6e3;
  }
  &.adm-treeNode--selected {
    background-color: #ececea;
    color: #202020;
    font-weight: 700;
  }

  .anticon {
    color: #6f6f6a;
    font-size: 16px;
  }
`;

export const useSidebarTreeState = () => {
  const [treeSelectedKeys, setTreeSelectedKeys] = useState<React.Key[]>([]);
  const [treeExpandKeys, setTreeExpandKeys] = useState<React.Key[]>([]);
  const [treeLoadedKeys, setTreeLoadedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  return {
    treeSelectedKeys,
    treeExpandKeys,
    treeLoadedKeys,
    autoExpandParent,
    setTreeSelectedKeys,
    setTreeExpandKeys,
    setTreeLoadedKeys,
    setAutoExpandParent,
  };
};

export default function SidebarTree(props: TreeProps) {
  return (
    <StyledTree
      blockNode
      showIcon
      motion={null} // https://github.com/ant-design/ant-design/issues/16943#issuecomment-859966751
      {...props}
    />
  );
}
