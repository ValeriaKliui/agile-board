import { PhotoUploader } from '@pages/Profile/components';
import { SelectableUploaderProps } from './types';
import { SelectedItem } from '@shared/components';
import { Alert, Spin } from 'antd';

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
