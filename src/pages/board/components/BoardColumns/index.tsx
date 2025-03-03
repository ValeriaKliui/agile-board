import './scroll.css'

import { ColumnCreator } from "@pages/board/components";
import { hasPermission } from "@pages/board/utils";
import { PERMISSIONS } from "@shared/constants";
import { columnsStore } from "@store";
import { observer } from "mobx-react-lite";

import { ColumnItem } from "./ColumnItem";
import { ColStyled, RowStyled } from "./styled";

export const BoardColumns = observer(() => {
    const columns = columnsStore.columns;
    const lastColumnOrder = columns.at(-1)?.order ?? 0;
    const canEdit = hasPermission(PERMISSIONS.boards.edit);

    return (
        <RowStyled gutter={16} justify="start" >
            {columns.map(({ columnID, title, order }) => (
                <ColumnItem key={columnID} columnID={columnID} title={title} order={order} />
            ))}
            {canEdit && (
                <ColStyled>
                    <ColumnCreator lastColumnOrder={lastColumnOrder} />
                </ColStyled>
            )}
        </RowStyled>
    );
});