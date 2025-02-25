import { BoardCard } from '@pages/home/components';
import { Boards } from '@pages/home/components/UserBoards/styled';
import { UserBoardsProps } from '@pages/home/components/UserBoards/types';
import { Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router';

export const UserBoards = observer(({ boardsInfo, isLoading }: UserBoardsProps) => {
    if (isLoading) return <Spin />;
    if (!boardsInfo || boardsInfo.length === 0) return false;

    return (
        <>
            {boardsInfo.map(([role, boards]) => (
                <div>
                    <Title level={5} className="capitalize">
                        {role}
                    </Title>
                    <Boards>
                        {boards.map(({ title, createdAt, owner, userRole, id }) => (
                            <>
                                <NavLink to={`board/${id}`}>
                                    <BoardCard key={id} id={id} title={title} createdAt={createdAt} owner={owner} userRole={userRole} />
                                </NavLink>
                            </>
                        ))}
                    </Boards>
                </div>
            ))}
        </>
    );
});

