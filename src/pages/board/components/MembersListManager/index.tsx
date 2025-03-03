import { MembersAddModal, MembersList } from '@pages/board/components';
import { hasPermission } from '@pages/board/utils';
import { Button } from '@shared/components';
import { PERMISSIONS } from '@shared/constants';
import { useModal } from '@shared/hooks';
import { sortArrByKey } from '@shared/utils';
import { boardStore } from '@store';
import { Col, Row } from 'antd';
import { observer } from 'mobx-react-lite';

export const MembersListManager = observer(() => {
    const members = sortArrByKey(boardStore.membersInfo, 'role');
    const { openModal, isModalOpen, closeModal } = useModal();
    const canInvite = hasPermission(PERMISSIONS.boards.invite_users);

    return (
        <>
            <Row gutter={5} align="middle">
                <MembersList members={members} />
                <Col>
                    {canInvite && (
                        <Button type="primary" onClick={openModal}>
                            Invite
                        </Button>
                    )}
                </Col>
            </Row>
            <MembersAddModal isModalOpen={isModalOpen} onClose={closeModal} />
        </>
    );
});
