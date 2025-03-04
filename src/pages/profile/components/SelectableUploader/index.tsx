import { PhotoUploader } from '@pages/profile/components';
import { SelectedItem } from '@shared/components';
import { Alert, } from 'antd';

import { SelectableUploaderProps } from './types';

export const SelectableUploader = ({
  error,
  checkIsSelected,
  ...uploaderProps
}: SelectableUploaderProps) => {
  if (error) return <Alert type="error" message={error} />;

  return (
    <PhotoUploader
      itemRender={(item, itemProps) =>
        checkIsSelected(itemProps) ? <SelectedItem>{item}</SelectedItem> : item
      }
      {...uploaderProps}
    />
  );
};
