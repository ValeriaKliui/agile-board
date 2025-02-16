import { AvatarGalleryProps } from "@components/AvatarsGallery/interfaces";
import { SelectedItem } from "@components/SelectedItem";
import { UploadGallery } from "@components/UploadGallery";
import { Alert, Spin } from "antd";

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
        (url || uid) === selectedAvatar ? (
          <SelectedItem>{item}</SelectedItem>
        ) : (
          item
        )
      }
      {...galleryProps}
    />
  );
};
