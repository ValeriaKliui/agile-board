import { ROLES_PERMISSIONS } from '@constants';
import { Tooltip } from '@pages/board/components';
import { Avatar } from '@shared/components';
import { Col, Row, } from 'antd';

import { MembersListManagerProps } from './types';

export const MembersListManager = ({ members }: MembersListManagerProps) => {
    return (
        <Row gutter={5} align="middle">
            {members &&
                Object.entries(members).map(([id, role]) => {
                    return (
                        <Col key={id}>
                            <Tooltip title={role} placement="top">
                                <Avatar color={ROLES_PERMISSIONS[role].color} src={role} size={40} />
                            </Tooltip>
                        </Col>
                    );
                })}
        </Row>
    );
};
