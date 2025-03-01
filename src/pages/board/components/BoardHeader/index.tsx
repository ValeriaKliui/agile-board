import { hasPermission } from '@pages/board/utils';
import { InputEditable } from '@shared/components/InputEditable';
import { PERMISSIONS } from '@shared/constants';
import { type BoardInfo, boardStore, } from '@store';
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';

const { Text } = Typography

export const BoardHeader = observer(({ title }: Pick<BoardInfo, 'title'>) => {
    const isEditable = hasPermission(PERMISSIONS.boards.edit);

    const onEdit = async (title: string) => {
        const boardID = boardStore.currentBoardInfo?.boardID

        if (boardID) await boardStore.updateBoard({ boardID, boardData: { title } })
    }

    return (
        <header>
            {isEditable ? (
                <InputEditable strong defaultValue={title} onFinishEdit={onEdit} />
            ) : (
                <Text strong>{title}</Text>
            )}
        </header>
    );
})
