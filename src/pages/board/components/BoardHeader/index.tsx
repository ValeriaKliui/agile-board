import { PERMISSIONS } from '@constants';
import { hasPermission } from '@pages/board/utils';
import { InputEditable } from '@shared/components/InputEditable';
import { boardsStore } from '@store/boards';
import { BoardInfo } from '@store/boards/types';
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';

const { Text } = Typography

export const BoardHeader = observer(({ title }: Pick<BoardInfo, 'title'>) => {
    const onEdit = async (title: string) => {
        if (boardsStore.currentBoardID) await boardsStore.updateBoard({ id: boardsStore.currentBoardID, boardData: { title } })
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
