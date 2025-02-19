export interface UseUploadProps<T> {
  filesData: T[];
  onUpload: (url: string) => void;
  onRemove: (url: string) => void;
}
