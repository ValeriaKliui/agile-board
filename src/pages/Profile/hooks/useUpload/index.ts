import { handleUploadToStorage } from '@pages/profile/services';
import { UploadProps } from 'antd';
import type { UploadRequestOption } from 'rc-upload/lib/interface';
import { useEffect, useState } from 'react';

import { UseUploadProps } from './types';

export const useUpload = <T extends { url?: string }>({
  filesData = [],
  onUpload,
  onRemove,
}: UseUploadProps<T>) => {
  const [isErrorUploading, setIsErrorUploading] = useState<string | null>(null);
  const [fileList, setFileList] = useState<T[]>(filesData);

  useEffect(() => {
    setFileList(filesData);
  }, [filesData]);

  const handleUpload = async (options: UploadRequestOption) => {
    try {
      const imageUrl = await handleUploadToStorage(options);
      setFileList((prevList) =>
        prevList.map((file, index) =>
          index === prevList.length - 1 ? { ...file, url: imageUrl } : file,
        ),
      );
      onUpload?.(imageUrl);
    } catch (error) {
      console.error('Upload error:', error);
      setIsErrorUploading(error instanceof Error ? error.message : 'Upload failed');
    }
  };

  const handleChange: UploadProps<T>['onChange'] = ({ fileList: updatedList, file }) => {
    if (file.status === 'removed') {
      onRemove?.(file.url || '');
    }
    setFileList(updatedList as unknown as T[]);
  };

  return {
    fileList,
    handleUpload,
    isErrorUploading,
    handleChange,
  };
};
