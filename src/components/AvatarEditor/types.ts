export interface AvatarEditorProps {
  isEditing: boolean;
  onToggleEdit: () => void;
  onSave: (selectedAvatar: string) => void;
}
