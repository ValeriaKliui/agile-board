import { PhotoGalleryProps } from "@components/UploadGallery/interfaces";

export interface AvatarGalleryProps
  extends Omit<PhotoGalleryProps, "itemRender"> {
  isLoading: boolean;
  error: string | null;
  selectedAvatar: string | null;
}
