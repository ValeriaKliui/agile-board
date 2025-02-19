import { SelectedItem } from '@shared/components';
import { AvatarGalleryProps } from './types';
import { Alert, Spin } from 'antd';
import { UploadGallery } from '../UploadGallery';

export const AvatarGallery = ({
  isLoading,
  error,
  selectedAvatar,
  ...galleryProps
}: AvatarGalleryProps) => {
  if (error) return <Alert type="error" message={error} />;
  if (isLoading) return <Spin />;

  return (
    <UploadGallery
      itemRender={(item, { url, uid }) =>
        (url || uid) === selectedAvatar ? <SelectedItem>{item}</SelectedItem> : item
      }
      {...galleryProps}
    />
  );
};
