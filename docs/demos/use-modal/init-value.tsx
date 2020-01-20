import React, { FC } from 'react';
import { Modal, Button } from 'antd';
import { useModal, UseModalResult } from '@pansy/hooks';

interface InitValueType {
  name: string;
}

const LoginModal: FC<UseModalResult<InitValueType>> = (props) => {
  const { visible, closeModal, initValue = {} as InitValueType } = props;

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <p>{initValue.name}</p>
    </Modal>
  )
}

const InitValueDemo: FC = () => {
  const loginModal = useModal<InitValueType>();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          loginModal.openModal({
            name: 'Tom'
          })}
        }>
        点击
      </Button>

      <LoginModal {...loginModal} />
    </>
  )
}

export default InitValueDemo;
