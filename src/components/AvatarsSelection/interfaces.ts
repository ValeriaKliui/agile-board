import { UploadFile } from 'antd';

export interface AvatarsSelectionProps {
  isLoading: boolean;
  defaultAvatars: UploadFile[];
  userAvatars: string[];
  errorDefault: string | null;
  errorUser: string | null;
  selectedAvatar: string | null;
  onSelect: (avatar: UploadFile) => void;
  onSave: () => void;
  onRemove: (file: string) => Promise<void>;
  onUpload?: (file: UploadFile) => void;
}
