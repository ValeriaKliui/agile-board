import { PERMISSIONS } from '@constants';
import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Column, ColumnCreator } from '@pages/board/components';
import { hasPermission } from '@pages/board/utils';
import { columnsStore, } from '@store';
import { observer } from 'mobx-react-lite';

import { ColStyled, RowStyled } from './styled';

export const Board = observer(() => {
    const columns = columnsStore.columns
    const lastColumnOrder = columns.at(-1)?.order ?? 0;

    const onDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) return;
        const taskID = active.id as string;
        const newColumnID = over.id as string;

        console.log(taskID, newColumnID);
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
    );

    return (
        <DndContext onDragEnd={onDragEnd} sensors={sensors}>
            <RowStyled
                gutter={16}
                justify="start"
            >
                {columns?.map(({ columnID, title, order }) => {
                    return <ColStyled key={order}>
                        <Column columnID={columnID} title={title} order={order} />
                    </ColStyled>
                }
                )}
                {hasPermission({ permission: PERMISSIONS.boards.edit }) && <ColumnCreator lastColumnOrder={lastColumnOrder} />}
            </RowStyled>
        </DndContext>
    );
});
