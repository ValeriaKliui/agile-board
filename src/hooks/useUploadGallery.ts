import { useEffect, useState } from "react";

export const useUploadGallery = <
  TFileType extends { uid: string; url: string; name: string }, // Add constraint to TFileType
  TResponse extends Record<string, unknown>,
>(
  fetchFunc: () => Promise<TResponse>,
  dataKey: string,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [galleryData, setGalleryData] = useState<TFileType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchFunc();

        const data = (response[dataKey] || []) as TFileType[];

        setGalleryData(
          data.map((url, index) => ({
            uid: String(index), // Assign unique ID
            name: String(index), // You can customize this based on your requirements
            url,
          })),
        );
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunc, dataKey]);

  return { galleryData, isLoading, errorMessage };
};
