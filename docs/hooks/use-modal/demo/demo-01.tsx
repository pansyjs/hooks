/**
 * title: 弹框示例
 * desc: 可配合ant-design Modal 组件使用
 */
import React, { FC } from 'react';
import { Button, Modal } from 'antd';
import { useModal } from '@pansy/hooks';
import { UseModalResult } from '@pansy/hooks/es/use-modal';

const LoginModal: FC<UseModalResult> = (props) => {
  const { visible, closeModal } = props;

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

const Example: FC = () => {
  const loginModal = useModal();

  return (
    <>
      <Button type="primary" onClick={() => { loginModal.openModal() }}>
      打开弹框
      </Button>

      <LoginModal {...loginModal} />
    </>
  )
}

export default Example;
