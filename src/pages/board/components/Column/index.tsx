import { useDroppable } from '@dnd-kit/core';
import { TaskCreator, TasksList } from '@pages/board/components';
import { hasPermission } from '@pages/board/utils';
import { PERMISSIONS } from '@shared/constants';
import { Column as ColumnType, tasksStore } from '@store';
import { Flex } from 'antd';
import { observer } from 'mobx-react-lite';

import { CardStyled } from './styled';

export const Column = observer(({ columnID, title, order }: ColumnType) => {
    const { setNodeRef } = useDroppable({ id: columnID });
    const tasks = tasksStore.tasks?.[columnID];

    const canCreateNew = order === 1 && hasPermission({ permission: PERMISSIONS.tasks.create });

    return (
        <CardStyled ref={setNodeRef} size="small" title={title}>
            <Flex vertical gap="middle">
                <TasksList tasks={tasks} />
                {canCreateNew && <TaskCreator columnID={columnID} />}
            </Flex>
        </CardStyled>
    );
});
