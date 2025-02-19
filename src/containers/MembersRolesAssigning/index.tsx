import { Select } from '@components/Select';
import { VirtualList } from '@components/VirtualList';
import { ROLES } from '@constants/roles';
import { MembersRolesAssigningProps } from '@containers/MembersRolesAssigning/types';
import { List, Form } from 'antd';

export const MembersRolesAssigning = ({ roles, members }: MembersRolesAssigningProps) => {
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
