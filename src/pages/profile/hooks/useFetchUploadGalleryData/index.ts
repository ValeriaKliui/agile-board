import { useEffect, useState } from 'react';

export const useFetchUploadGalleryData = <
  TFileType extends { uid: string; url?: string; name: string },
  TResponse extends Record<string, unknown>,
>(
  fetchFunc: () => Promise<TResponse>,
  dataKey: keyof TResponse,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [galleryData, setGalleryData] = useState<TFileType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchFunc();

        if (!response || !Array.isArray(response[dataKey])) {
          throw new Error(
            `Invalid data format: '${String(dataKey)}' is not an array or is missing`,
          );
        }

        const data = response[dataKey] as string[];

        setGalleryData(
          data.map((url, index) => ({
            uid: url,
            name: `Item ${index + 1}`,
            url,
          })) as TFileType[],
        );
      } catch (error) {
        console.error('Error while uploading', error);
        const errorMessage =
          error instanceof Error ? error.message : 'An unexpected error occurred';
        setErrorMessage(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunc, dataKey]);

  return { galleryData, isLoading, errorMessage };
};
