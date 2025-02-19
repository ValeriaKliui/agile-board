import { PhotoGalleryProps } from '@components/UploadGallery/types';

export interface AvatarGalleryProps extends Omit<PhotoGalleryProps, 'itemRender'> {
  isLoading: boolean;
  error: string | null;
  selectedAvatar: string | null;
}
