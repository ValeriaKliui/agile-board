import { UploadGallery } from "@components/UploadGallery";
import { FileType } from "@components/UploadGallery/interfaces";
import { FormUpdateUserInfoContainer } from "@containers/FormUpdateUserInfoContainer";
import { useUploadGallery } from "@hooks/useUploadGallery";
import { getData } from "@utils/firebase/db/getData";
import { useState, useCallback } from "react";

interface Ddfsdf {
  links: string[];
}

export const ProfilePage = () => {
  const fetchDefaultAvatars = useCallback(
    () => getData<Ddfsdf>("avatars", "default"),
    [],
  );

  const {
    galleryData: defaultAvatars,
    isLoading: isDefaultLoading,
    errorMessage: isDefaultError,
  } = useUploadGallery<FileType, Ddfsdf>(fetchDefaultAvatars, "links");

  const [selectedAvatar, selectAvatar] = useState<string | null>(null);

  return (
    <>
      <UploadGallery
        filesData={defaultAvatars}
        maxPhotoAmount={defaultAvatars.length}
        title={"default avatars"}
        isLoading={isDefaultLoading}
        errorMessage={isDefaultError}
        handleClick={(item) => {
          selectAvatar(item.url); // Set selected avatar on click
        }}
        itemRender={(item, file) => {
          return (
            <>
              {file.url === selectedAvatar && "selected"}
              {item}
            </>
          );
        }}
      />
      <UploadGallery
        filesData={[{ uid: "3", url: "234324", status: "done", name: "34" }]}
        maxPhotoAmount={defaultAvatars.length}
        title={"uploaded avatars"}
        handleClick={(item) => {
          selectAvatar(item.url);
        }}
        itemRender={(item, file) => {
          return (
            <>
              {file.url === selectedAvatar && "selected"}
              {item}
            </>
          );
        }}
      />
      <FormUpdateUserInfoContainer />
    </>
  );
};
