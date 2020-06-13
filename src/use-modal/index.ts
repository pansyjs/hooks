import { useState } from 'react';
import useBoolean from '../use-boolean';

export type UseModalResult<T = undefined> = {
  visible: boolean;
  initValue?: T;
  openModal: (initValue?: T) => void;
  closeModal: () => void;
};

const useModal = <T = undefined>(): UseModalResult<T> => {
  const [state, { toggle }] = useBoolean(false);
  const [initValue, setInitValue] = useState<T>();

  const openModal = (initValue?: T) => {
    toggle(true);
    setInitValue(initValue);
  };

  const closeModal = () => {
    toggle(false);
  };

  return {
    initValue,
    openModal,
    visible: state,
    closeModal,
  };
};

export default useModal;
