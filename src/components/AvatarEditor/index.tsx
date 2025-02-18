import { Button } from 'antd';
import { AvatarEditorProps } from './interfaces';
import { AvatarsSelectionContainer } from '@containers/AvatarsSelectionContainer';

export const AvatarEditor = ({ isEditing, onToggleEdit, onSave }: AvatarEditorProps) => {
  return (
    <>
      {!isEditing && (
        <Button type="dashed" onClick={onToggleEdit}>
          Change avatar
        </Button>
      )}
      {isEditing && <AvatarsSelectionContainer onSave={onSave} />}
    </>
  );
};
