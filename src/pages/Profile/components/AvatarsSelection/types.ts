import { UploadFile } from 'antd';

export interface AvatarsSelectionProps {
  isLoading: boolean;
  defaultAvatars: UploadFile[];
  userAvatars: UploadFile[];
  errorDefault: string | null;
  errorUser: string | null;
  selectedAvatar: string | null;
  onSelect: (avatar: UploadFile) => void;
  onSave: () => void;
  onRemove: (imgUrl: string) => Promise<void>;
  onUpload?: (imgUrl: string) => Promise<void>;
  isUpdating: boolean;
}
