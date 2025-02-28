import { AddMembersModal,MemberItem } from '@pages/board/components';
import { hasPermission } from '@pages/board/utils';
import { Button } from '@shared/components';
import { PERMISSIONS } from '@shared/constants';
import { useModal } from '@shared/hooks';
import { boardStore } from '@store';
import { Col, Row } from 'antd';
import { observer } from 'mobx-react-lite';

export const MembersListManager = observer(() => {
    const membersInfo = boardStore.membersInfo;
    const { openModal, isModalOpen, closeModal } = useModal()

    return (
        <>
            <Row gutter={5} align="middle">
                {membersInfo.map(({ color, username }) => {
                    return (
                        <Col key={username}>
                            <MemberItem color={color} username={username} />
                        </Col>
                    );
                })}
                <Col >
                    {hasPermission({ permission: PERMISSIONS.boards.invite_users }) && <Button type='primary' onClick={openModal}>Invite</Button>}
                </Col>
            </Row>
            <AddMembersModal isModalOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
)