import { PATHS } from '@constants';
import { BoardCard } from '@pages/home/components';
import Title from 'antd/es/typography/Title';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router';

import { Boards, Container } from './styled';
import { UserBoardsProps } from './types';

export const UserBoards = observer(({ boardsInfo, }: UserBoardsProps) => {
    if (!boardsInfo || boardsInfo.length === 0) return false;

    return (
        <>
            {boardsInfo.map(([role, boards]) => (
                <Container>
                    <Title level={5} className="capitalize">
                        {role}
                    </Title>
                    <Boards>
                        {boards.map(({ title, createdAt, owner, userRole, boardID }) => (
                            <NavLink to={`${PATHS.BOARD}/${boardID}`} key={boardID}>
                                <BoardCard
                                    boardID={boardID}
                                    title={title}
                                    createdAt={createdAt}
                                    owner={owner}
                                    userRole={userRole}
                                />
                            </NavLink>
                        ))}
                    </Boards>
                </Container>
            ))}
        </>
    );
});
