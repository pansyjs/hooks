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
    setInitValue(undefined);
  };

  return {
    initValue,
    visible: state,
    openModal,
    closeModal,
  };
};

export default useModal;
