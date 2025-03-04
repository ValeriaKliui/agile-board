export interface UseUploadProps<T> {
  filesData: T[];
  onUpload?: (url: string) => Promise<void>;
  onRemove?: (url: string) => Promise<void>;
}
