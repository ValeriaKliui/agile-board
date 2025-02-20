import { ROLES } from '@constants';
import { Select, VirtualList } from '@shared/components';
import { Form, List } from 'antd';

import { MembersRolesAssigningProps } from './types';

export const MembersRolesList = ({ roles, members }: MembersRolesAssigningProps) => {
  return (
    <VirtualList
      data={members}
      itemKey={'label'}
      onScroll={() => { }}
      renderItem={(item: { key: string }) => {
        return (
          <List.Item key={item.key}>
            <List.Item.Meta title={`${item.key}`} />
            <Form.Item name={['roles', item.key]} initialValue={ROLES.MEMBER} noStyle>
              <Select options={roles} />
            </Form.Item>
          </List.Item>
        );
      }}
    />
  );
};
