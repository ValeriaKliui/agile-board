import { useDraggable } from '@dnd-kit/core';

export const useTaskDraggable = (taskID: string) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: taskID });
  const { x = 0, y = 0 } = transform ?? {};

  return { attributes, listeners, setNodeRef, x, y };
};
