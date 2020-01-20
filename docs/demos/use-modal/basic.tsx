import React, { FC } from 'react';
import { Modal, Button } from 'antd';
import { useModal, UseModalResult } from '@pansy/hooks';

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

const BasicDemo: FC = () => {
  const loginModal = useModal();

  return (
    <>
      <Button type="primary" onClick={() => { loginModal.openModal() }}>
      点击
      </Button>

      <LoginModal {...loginModal} />
    </>
  )
}

export default BasicDemo;
