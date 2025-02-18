import { useState, useRef, useEffect } from 'react';
import debounce from 'lodash.debounce';

export const useDebouncedFetch = <T>(
  fetchFunc: (value: string) => Promise<T>,
  debounceTimeout: number = 800,
) => {
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState<T | null>(null);
  const fetchRef = useRef(0);

  const debounceFetcher = useRef(
    debounce(async (value: string) => {
      const currentFetchId = ++fetchRef.current;
      setFetching(true);

      try {
        const result = await fetchFunc(value);
        if (currentFetchId === fetchRef.current) {
          setResult(result);
        }
      } catch (error) {
        console.error('Error fetching options', error);
      } finally {
        setFetching(false);
      }
    }, debounceTimeout),
  ).current;

  useEffect(() => {
    return () => {
      debounceFetcher.cancel();
    };
  }, [debounceTimeout, debounceFetcher]);

  return { fetching, result, debounceFetcher };
};
