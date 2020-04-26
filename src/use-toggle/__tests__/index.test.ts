import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from '../';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current.toggle();
  });
};

describe('useToggle', () => {
  it('should be defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('test on init', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current.state).toBeFalsy();
  });
})
