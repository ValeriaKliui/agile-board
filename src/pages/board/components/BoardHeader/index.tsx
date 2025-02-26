import { PERMISSIONS } from '@constants';
import { hasPermission } from '@pages/board/utils';
import { InputEditable } from '@shared/components/InputEditable';
import { type BoardInfo, boardStore, } from '@store';
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';

const { Text } = Typography

export const BoardHeader = observer(({ title }: Pick<BoardInfo, 'title'>) => {
    const onEdit = async (title: string) => {
        const boardID = boardStore.currentBoardInfo.id
        if (boardID) await boardStore.updateBoard({ id: boardID, boardData: { title } })
    }

    return (
        <header>
            {hasPermission({ permission: PERMISSIONS.boards.edit }) ? (
                <InputEditable strong defaultValue={title} onFinishEdit={onEdit} />
            ) : (
                <Text strong>{title}</Text>
            )}
        </header>
    );
})
