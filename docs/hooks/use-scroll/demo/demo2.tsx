import React from 'react';
import { useScroll } from '@pansy/hooks';

export default () => {
  const scroll = useScroll(document);
  return (
    <div>
      <div>{JSON.stringify(scroll)}</div>
    </div>
  );
};
