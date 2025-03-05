import { DndContext } from '@dnd-kit/core';
import { restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers';
import { BoardColumns } from '@pages/board/components';
import { useTaskDnD } from '@pages/board/hooks';
import { observer } from 'mobx-react-lite';

import { Container } from './styled';

export const Board = observer(() => {
  const { onTaskMove, sensors } = useTaskDnD();

  return (
    <DndContext
      onDragEnd={onTaskMove}
      sensors={sensors}
      modifiers={[restrictToFirstScrollableAncestor]}
    >
      <Container>
        <BoardColumns />
      </Container>
    </DndContext>
  );
});
