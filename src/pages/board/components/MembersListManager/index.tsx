import { ROLES_PERMISSIONS } from '@constants';
import { MemberItem, MemberItemType } from '@pages/board/components';
import { getUsersByIDs } from '@pages/board/services/getUserByIDs';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';

import { MembersListManagerProps } from './types';

export const MembersListManager = ({ members }: MembersListManagerProps) => {
    const [membersData, setMembersData] = useState<MemberItemType[]>([]);

    useEffect(() => {
        const fetchUsernames = async () => {
            if (members) {
                const membersIDs = Object.keys(members);
                const users = await getUsersByIDs({ IDs: membersIDs });

                const membersData = users.map((user) => {
                    const role = members[user.id];
                    return {
                        role,
                        username: user.username,
                        color: ROLES_PERMISSIONS[role]?.color
                    };
                });

                setMembersData(membersData);
            }
        };

        fetchUsernames();
    }, [members]);

    return (
        <Row gutter={5} align="middle">
            {membersData.map(({ color, username }) => {
                return (
                    <Col key={username}>
                        <MemberItem color={color} username={username} />
                    </Col>
                );
            })}
        </Row>
    );
};
