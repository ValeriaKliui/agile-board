import { MemberItem, } from '@pages/board/components';
import { Col, } from 'antd';

import { MemberListProps } from './types';

export const MembersList = ({ members }: MemberListProps) => (
    <>
        {members.map(({ color, username, role }) => (
            <Col key={username}>
                <MemberItem color={color} username={username} role={role} />
            </Col>
        ))}
    </>
);
