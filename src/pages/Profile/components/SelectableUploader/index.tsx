import { PhotoUploader } from '@pages/profile/components';
import { SelectedItem } from '@shared/components';
import { Alert, Spin } from 'antd';

import { SelectableUploaderProps } from './types';


export const SelectableUploader = ({
  isLoading,
  error,
  checkIsSelected,
  ...uploaderProps
}: SelectableUploaderProps) => {
  if (error) return <Alert type="error" message={error} />;
  if (isLoading) return <Spin />;

  return (
    <PhotoUploader
      itemRender={(item, itemProps) =>
        checkIsSelected(itemProps) ? <SelectedItem>{item}</SelectedItem> : item
      }
      {...uploaderProps}
    />
  );
};
