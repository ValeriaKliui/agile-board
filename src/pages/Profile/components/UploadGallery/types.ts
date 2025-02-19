import { UploadFile } from 'antd';
import { ReactNode } from 'react';

export interface PhotoGalleryProps {
  maxPhotoAmount?: number;
  isEditable?: boolean;
  filesData: UploadFile[];
  title?: string;
  itemRender: (item: ReactNode, file: UploadFile) => ReactNode;
  handleClick: (file: UploadFile) => void;
  onUpload?: (imageUrl: string) => Promise<void>;
  onRemove?: (imageUrl: string) => Promise<void>;
}

export enum UploadFileStatusEnum {
  ERROR = 'error',
  DONE = 'done',
  UPLOADING = 'uploading',
  REMOVED = 'removed',
}
