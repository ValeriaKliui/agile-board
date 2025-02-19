import { Select } from '@components/Select';
import { VirtualList } from '@components/VirtualList';
import { ROLES } from '@constants/roles';
import { MembersRolesAssigningProps } from '@containers/MembersRolesAssigning/interfaces';
import { List, Form } from 'antd';

export const MembersRolesAssigning = <T,>({ roles, members }: MembersRolesAssigningProps<T>) => {
  return (
    <VirtualList
      data={members}
      itemKey={'label'}
      onScroll={() => {}}
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
