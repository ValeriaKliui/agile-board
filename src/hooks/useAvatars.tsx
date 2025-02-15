import {
  FileType,
  UploadFileStatusEnum,
} from "@components/UploadGallery/interfaces";
import { UploadFileStatus } from "antd/es/upload/interface";
import { useEffect, useState } from "react";

export const useAvatars = (
  fetchFunc: () => Promise<{ links: string[] }>,
): FileType[] => {
  const [avatars, setAvatars] = useState<FileType[]>([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const photos = await fetchFunc();

        const status = UploadFileStatusEnum.DONE as unknown as UploadFileStatus;

        setAvatars(
          photos.links.map((url, index) => ({
            uid: url,
            name: String(index),
            url,
            status,
          })),
        );
      } catch (error) {
        console.log(error);
        const status =
          UploadFileStatusEnum.ERROR as unknown as UploadFileStatus;

        setAvatars((prev) => prev.map((avatar) => ({ ...avatar, status })));
      }
    };

    fetchAvatars();
  }, [fetchFunc]);

  return avatars;
};
