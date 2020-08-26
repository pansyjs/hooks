/**
 * title: 抽屉示例
 * desc: 可配合ant-design Drawer组件使用
 */
import React from 'react';
import { Button, Drawer } from 'antd';
import { useModal } from '@pansy/hooks';
import { UseModalResult } from '@pansy/hooks/es/use-modal';

const LoginDrawer: React.FC<UseModalResult> = (props) => {
  const { visible, closeModal } = props;

  return (
    <Drawer
      title="Basic Drawer"
      visible={visible}
      onClose={closeModal}
      onCancel={closeModal}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

const Example: React.FC = () => {
  const loginModal = useModal();

  return (
    <>
      <Button type="primary" onClick={() => { loginModal.openModal() }}>
        打开抽屉
      </Button>

      <LoginDrawer {...loginModal} />
    </>
  )
}

export default Example;
