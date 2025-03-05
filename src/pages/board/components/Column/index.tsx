import { useDroppable } from '@dnd-kit/core';
import { TaskCreatorModal, TasksList } from '@pages/board/components';
import { hasPermission } from '@pages/board/utils';
import { PERMISSIONS } from '@shared/constants';
import { Column as ColumnType, tasksStore } from '@store';
import { Divider, Flex } from 'antd';
import { observer } from 'mobx-react-lite';

import { Container, TitleStyled } from './styled';

export const Column = observer(({ columnID, title, order }: ColumnType) => {
  const { setNodeRef } = useDroppable({ id: columnID });
  const tasks = tasksStore.tasks?.[columnID];
  const canCreateNew = order === 1 && hasPermission(PERMISSIONS.tasks.create);

  return (
    <Container ref={setNodeRef}>
      <TitleStyled level={5}>{title}</TitleStyled>
      <Divider />
      <Flex vertical gap="middle">
        <TasksList tasks={tasks} />
        {canCreateNew && <TaskCreatorModal columnID={columnID} />}
      </Flex>
    </Container>
  );
});
