import { useEffect } from 'react';
import usePersistFn from '../use-persist-fn';

const useMount = (fn: any) => {
  // 持久化函数
  const fnPersist = usePersistFn(fn);

  useEffect(() => {
    if (fnPersist && typeof fnPersist === 'function') {
      fnPersist();
    }
  }, [])
};

export default useMount;
