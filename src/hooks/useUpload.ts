import { useEffect, useState } from "react";
import { handleUploadToStorage } from "@utils/cloudinary/handleUpload";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import { UploadProps } from "antd";

export const useUpload = <T>({
  filesData = [],
  onUpload,
  onRemove,
}: {
  filesData: T[];
}) => {
  const [isErrorUploading, setIsErrorUploading] = useState<string | null>(null);

  const [fileList, setFileList] = useState<T[]>(filesData);

  useEffect(() => {
    setFileList(filesData);
  }, [filesData]);

  const handleUpload = async (options: UploadRequestOption) => {
    try {
      const imageUrl = await handleUploadToStorage(options);
      onUpload(imageUrl);
    } catch (error) {
      setIsErrorUploading(error.message);
    }
  };

  const handleChange: UploadProps<T>["onChange"] = async ({
    fileList,
    file,
  }) => {
    if (file.status === "removed") onRemove(file.url);
    setFileList(fileList as T[]);
  };

  return {
    fileList,
    handleUpload,
    isErrorUploading,
    handleChange,
  };
};
