import { useState } from 'react';
import useToggle from '../use-toggle';

export type UseModalResult<T = undefined> = {
  visible: boolean;
  initValue?: T;
  openModal: (initValue?: T) => void;
  closeModal: () => void;
};

const useModal = <T = undefined>(): UseModalResult<T> => {
  const [on, toggle] = useToggle(false);
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
    visible: on,
    closeModal,
  };
};

export default useModal;
