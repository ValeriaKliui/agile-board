import { BoardCard } from '@pages/home/components';
import { useUserBoardsInfo } from '@pages/home/hooks';
import { Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import { observer } from 'mobx-react-lite';

export const UserBoards = observer(() => {
    const { isLoading, boardsInfo } = useUserBoardsInfo()

    if (isLoading) return <Spin />
    if (boardsInfo.length === 0) return false;

    return (
        <>{
            boardsInfo.map(([role, boards]) => <div>
                <Title level={5} className='capitalize'>
                    {role}
                </Title>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {boards.map(({ title, createdAt, owner, userRole }) => (
                        <>
                            <BoardCard title={title} createdAt={createdAt} owner={owner} userRole={userRole} />
                        </>))}
                </div>
            </div>)

        }</>
    );
});

