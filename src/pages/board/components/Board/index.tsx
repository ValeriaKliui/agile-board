import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Column } from '@pages/board/components';
import { ColStyled, RowStyled } from '@pages/board/components/Board/styled';
import { boardsStore } from '@store/boards';
import { observer } from 'mobx-react-lite';

export const Board = observer(() => {
    const { columns } = boardsStore.currentBoardInfo ?? {};

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
                {columns?.map(({ id, title, order }) => (
                    <ColStyled key={id}>
                        <Column id={id} title={title} order={order} />
                    </ColStyled>
                ))}
            </RowStyled>
        </DndContext>
    );
});
