import { getData, updateDataArray, type UpdateDataType } from '@services/firebase';
import { UploadFile } from 'antd';
import { useCallback } from 'react';

import { useFetchUploadGalleryData } from '../useFetchUploadGalleryData';
import { AvatarLinks } from './types';

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
