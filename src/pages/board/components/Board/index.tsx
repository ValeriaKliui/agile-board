import { DndContext } from '@dnd-kit/core';
import { Column, ColumnCreator } from '@pages/board/components';
import { useTaskDnD } from '@pages/board/hooks';
import { hasPermission } from '@pages/board/utils';
import { PERMISSIONS } from '@shared/constants';
import { columnsStore } from '@store';
import { observer } from 'mobx-react-lite';

import { ColStyled, RowStyled } from './styled';

export const Board = observer(() => {
    const columns = columnsStore.columns;
    const lastColumnOrder = columns.at(-1)?.order ?? 0;
    const canEdit = hasPermission({ permission: PERMISSIONS.boards.edit })

    const { onTaskMove, sensors } = useTaskDnD();

    return (
        <DndContext onDragEnd={onTaskMove} sensors={sensors}>
            <RowStyled gutter={16} justify="start">
                {columns?.map(({ columnID, title, order }) => (
                    <ColStyled key={order}>
                        <Column columnID={columnID} title={title} order={order} />
                    </ColStyled>
                ))}

                {canEdit && (
                    <ColStyled>
                        <ColumnCreator lastColumnOrder={lastColumnOrder} />
                    </ColStyled>
                )}
            </RowStyled>
        </DndContext>
    );
});
