import { addMembersToBoard, boardStore } from '@store';
import { useState } from 'react';

export const useAddMembersToBoard = ({ form, onSuccess }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleFormSubmit = async () => {
    setIsAdding(true);
    const { members: newMembers } = form.getFieldsValue();
    const { boardID, members } = boardStore.currentBoardInfo ?? {};

    if (!boardID) return;

    await addMembersToBoard({ boardID, members: newMembers });
    await boardStore.updateBoard({
      boardID,
      members: { ...members, ...newMembers },
    });
    await boardStore.fetchCurrentBoard({ boardID });
    setIsAdding(false);
    onSuccess?.();
  };

  return { handleFormSubmit, isAdding };
};
