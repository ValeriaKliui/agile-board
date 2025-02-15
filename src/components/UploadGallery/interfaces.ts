import { ReactNode } from "react";

export interface PhotoGalleryProps {
  maxPhotoAmount?: number;
  isEditable: boolean;
  filesData: FileType[];
  title?: string;
  itemRender: (item: ReactNode, file: FileType) => ReactNode; // Item render should receive 'file' as the second argument
  handleClick: (file: FileType) => void; // handleClick should accept 'file' (not just void)
  errorMessage: null | boolean;
}

export type FileType = {
  uid: string;
  url: string;
  name: string;
  status?: UploadFileStatusEnum;
};

export enum UploadFileStatusEnum {
  ERROR = "error",
  DONE = "done",
  UPLOADING = "uploading",
  REMOVED = "removed",
}
