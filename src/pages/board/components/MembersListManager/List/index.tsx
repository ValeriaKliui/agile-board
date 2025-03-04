import { MemberItem, } from '@pages/board/components';

import { MemberListProps } from './types';
import { Col } from 'antd';

export const MembersList = ({ members }: MemberListProps) => (
    <>
        {members.map(({ color, username, role }) => (
            <Col key={username}>
                <MemberItem color={color} username={username} role={role} />
            </Col>
        ))}
    </>
);
