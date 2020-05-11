/**
 * title: 默认用法
 */
import React, { FC } from 'react';
import { usePosition } from '@pansy/hooks';

const Example: FC = () => {
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition();

  const loader = !latitude && !error ? (
    <>
      <div>Trying to fetch location...</div>
      <br/>
    </>
  ) : null;

  return (
    <>
      {loader}
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {timestamp}<br/>
        accuracy: {accuracy && `${accuracy}m`}<br/>
        error: {error}
      </code>
    </>
  );
};

export default Example;
