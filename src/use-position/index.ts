import { useState, useEffect } from 'react';

export interface PositionInfo {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export interface UsePositionResult extends PositionInfo {
  error: string | null;
};

const defaultOptions: PositionOptions = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

const usePosition = (
  watch: boolean = false,
  options: PositionOptions = defaultOptions
): UsePositionResult => {
  const [position, setPosition] = useState<PositionInfo>({} as PositionInfo);
  const [error, setError] = useState<string | null>(null);

  const onChange = ({coords, timestamp}: any) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    let watcher: number | undefined = undefined;
    if (watch) {
      watcher =
        navigator.geolocation.watchPosition(onChange, onError, options);
    } else {
      navigator.geolocation.getCurrentPosition(onChange, onError, options);
    }

    return () => {
      watcher && navigator.geolocation.clearWatch(watcher)
    };
  }, [
    options.enableHighAccuracy,
    options.timeout,
    options.maximumAge,
  ]);

  return {...position, error};
}

export default usePosition;
