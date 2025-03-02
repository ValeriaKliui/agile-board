import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';

export const useDebouncedFetch = <T>({
  fetchFunc,
  debounceTimeout = 800,
}: {
  fetchFunc: (value?: string) => Promise<T | undefined>;
  debounceTimeout?: number;
}) => {
  const [isFetching, setIsFetching] = useState(false);
  const [result, setResult] = useState<T | null>(null);
  const fetchRef = useRef(0);

  const debounceFetcher = useRef(
    debounce(async (value?: string) => {
      const currentFetchId = ++fetchRef.current;
      setIsFetching(true);

      try {
        const result = await fetchFunc(value);
        if (currentFetchId === fetchRef.current) {
          setResult(result);
        }
      } catch (error) {
        console.error('Error debounce fetching', error);
        setResult(null);
      } finally {
        setIsFetching(false);
      }
    }, debounceTimeout),
  ).current;

  useEffect(() => {
    return () => {
      debounceFetcher.cancel();
    };
  }, [debounceTimeout, debounceFetcher]);

  return { isFetching, result, debounceFetcher: debounceFetcher };
};
