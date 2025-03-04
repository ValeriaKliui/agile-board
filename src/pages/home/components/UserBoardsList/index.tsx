import { PATHS } from '@constants';
import { BoardCard, UserBoardsCreator, } from '@pages/home/components';
import { BOARDS_TITLES } from '@pages/home/constants';
import { Divider } from 'antd';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router';
import { Boards, Container, ResultStyled } from './styled';
import { UserBoardsProps } from './types';
import { Typography } from 'antd';

const {Title } = Typography

export const UserBoardsList = observer(({ boardsInfo, fetchBoards }: UserBoardsProps) => {
    if (!boardsInfo || boardsInfo.length === 0) return <ResultStyled
        status="404"
        title="You don't have any boards yet"
        subTitle="Create new!"
        extra={<UserBoardsCreator fetchUserBoards={fetchBoards} />}
    />;

    return (
        <>
            {boardsInfo.map(([role, boards],) => (
                <Container gap={'middle'} vertical key={role}>
                    <Title level={3} className="capitalize">
                        {BOARDS_TITLES[role]}
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
                    <Divider />
                </Container>
            ))}
        </>
    );
});
