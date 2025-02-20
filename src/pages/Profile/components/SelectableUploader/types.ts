import { UploadFile } from 'antd';

import { PhotoUploaderProps } from '../PhotoUploader/types';

export interface SelectableUploaderProps extends Omit<PhotoUploaderProps, 'itemRender'> {
  isLoading: boolean;
  error: string | null;
  selectedAvatar: string | null;
  checkIsSelected: (item: UploadFile) => boolean;
}
