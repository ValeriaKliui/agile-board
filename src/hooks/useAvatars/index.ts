import { getData } from '@services/firebase/db/getData';
import { UpdateDataType } from '@services/firebase/db/types';
import { updateDataArray } from '@services/firebase/db/updateDataArray';
import { UploadFile } from 'antd';
import { useFetchUploadGalleryData } from '@hooks';
import { useCallback } from 'react';

export const useAvatars = (dbName: string, collectionKey: string) => {
  const fetchAvatars = useCallback(async () => {
    const data = await getData<AvatarLinks>(dbName, collectionKey);
    return data || { avatar_urls: [] };
  }, [dbName, collectionKey]);

  const {
    galleryData: avatars,
    isLoading: isAvatarsLoading,
    errorMessage: errorLoading,
  } = useFetchUploadGalleryData<UploadFile, AvatarLinks>(fetchAvatars, 'avatar_urls');

  const onDataChange = useCallback(
    async (imageUrl: string, operationType: UpdateDataType) =>
      await updateDataArray(dbName, collectionKey, 'avatar_urls', imageUrl, operationType),
    [collectionKey, dbName],
  );

  const onUpload = useCallback(
    async (imageUrl: string) => await onDataChange(imageUrl, 'add'),
    [onDataChange],
  );
  const onRemove = useCallback(
    async (imageUrl: string) => await onDataChange(imageUrl, 'remove'),
    [onDataChange],
  );

  return {
    onUpload,
    onRemove,
    avatars,
    isAvatarsLoading,
    errorLoading,
  };
};
