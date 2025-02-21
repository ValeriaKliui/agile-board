import { ROLES } from '@constants';
import { Select, } from '@shared/components';
import { Form, List } from 'antd';
import { ForwardedRef, forwardRef } from 'react';

import { MembersRolesItemProps } from './types';

export const MembersRolesItem = forwardRef(({ item, roles }: MembersRolesItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { key, label } = item

    return (
        <List.Item key={key} ref={ref}>
            <List.Item.Meta title={`${label}`} />
            <Form.Item name={['roles', key]} initialValue={ROLES.MEMBER} noStyle>
                <Select options={roles} />
            </Form.Item>
        </List.Item>
    );
})

