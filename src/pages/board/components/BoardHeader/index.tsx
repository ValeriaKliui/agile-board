import { hasPermission } from '@pages/board/utils';
import { InputEditable } from '@shared/components';
import { PERMISSIONS } from '@shared/constants';
import { type BoardInfo, boardStore, } from '@store';
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';

const { Text } = Typography

export const BoardHeader = observer(({ title }: Pick<BoardInfo, 'title'>) => {
    const isEditable = hasPermission(PERMISSIONS.boards.edit);

    const onEdit = async (title: string) => {
        const { boardID } = boardStore.currentBoardInfo ?? {}

        if (boardID) await boardStore.updateBoard({ boardID, title })
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
