/**
 * title: 默认用法
 * desc: 默认切换布尔值状态，也可以接收一个参数作为新的值
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
      点击
      </Button>

      <LoginModal {...loginModal} />
    </>
  )
}

export default Example;
