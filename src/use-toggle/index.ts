import { useState, useCallback } from 'react';
import isBoolean from '@pansy/is-boolean';

type UseToggleResult = [boolean, (nextValue?: any) => void];

const useToggle = (initialValue: boolean): UseToggleResult => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback((nextValue: any) => {
    if (isBoolean(nextValue)) {
      setValue(nextValue);
    } else {
      setValue(currentValue => !currentValue);
    }
  }, [setValue])

  return [value, toggle];
}

export default useToggle;
