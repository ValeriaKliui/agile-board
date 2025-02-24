import { PhotoUploaderProps } from '@pages/profile/components';
import { UploadFile } from 'antd';

export interface SelectableUploaderProps extends Omit<PhotoUploaderProps, 'itemRender'> {
  error: string | null;
  selectedAvatar: string | null;
  checkIsSelected: (item: UploadFile) => boolean;
}
