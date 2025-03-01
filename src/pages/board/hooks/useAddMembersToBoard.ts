import { addMembersToBoard } from '@shared/services';
import { boardStore } from '@store';

export const useAddMembersToBoard = ({ form, onSuccess }) => {
  const isAdding = boardStore.isLoading;

  const handleFormSubmit = async () => {
    const { members: newMembers } = form.getFieldsValue();
    const { boardID, members } = boardStore.currentBoardInfo ?? {};

    if (!boardID) return;
    await addMembersToBoard({ boardID, members: newMembers });
    await boardStore.updateBoard({
      boardID,
      members: { ...members, ...newMembers },
    });
    await boardStore.fetchCurrentBoard({ boardID });

    onSuccess?.();
  };

  return { handleFormSubmit, isAdding };
};
