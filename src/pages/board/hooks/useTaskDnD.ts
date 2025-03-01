import { DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { boardStore, tasksStore } from '@store';
import { useCallback } from 'react';

export const useTaskDnD = () => {
  const onTaskMove = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;
    const { boardID } = boardStore.currentBoardInfo ?? {};

    if (!over) return;
    const taskID = active.id as string;
    const newColumnID = over.id as string;

    if (boardID)
      await tasksStore.moveTask({
        taskID,
        newColumnID,
        boardID,
      });
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
  );

  return { onTaskMove, sensors };
};
