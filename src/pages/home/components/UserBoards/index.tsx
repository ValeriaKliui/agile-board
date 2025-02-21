import { BoardCard } from '@pages/home/components/BoardCard';
import { useUserBoardsInfo } from '@pages/home/hooks';
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';

export const UserBoards = observer(() => {
    const { isLoading, boardsInfo } = useUserBoardsInfo()

    if (isLoading) return <Spin />

    return (
        <div>
            {boardsInfo.length > 0 ? (
                <ul>
                    {boardsInfo.map(({ title, id, createdAt }) => (
                        <li key={id}>
                            <BoardCard title={title} createdAt={createdAt} />
                        </li>))}
                </ul>
            ) : (
                <div>No boards available.</div>
            )}
        </div>
    );
});

