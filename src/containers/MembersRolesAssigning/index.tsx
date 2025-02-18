import { Select } from '@components/Select';
import { VirtualList } from '@components/VirtualList';
import { ROLES } from '@constants/roles';
import { MembersRolesAssigningProps } from '@containers/MembersRolesAssigning/interfaces';
import { transformObjectToOptions } from '@utils/common';
import { List, Form } from 'antd';

export const MembersRolesAssigning = <T,>({ getData }: MembersRolesAssigningProps<T>) => {
  const rolesOptions = transformObjectToOptions(ROLES).filter(({ value }) => value !== ROLES.OWNER);

  return (
    <VirtualList
      data={getData()}
      itemKey={'email'}
      renderItem={(item) => {
        return (
          <List.Item key={item.key}>
            <List.Item.Meta title={`${item.key}`} />
            <Form.Item name={['roles', item.key]} initialValue={ROLES.MEMBER} noStyle>
              <Select options={rolesOptions} />
            </Form.Item>
          </List.Item>
        );
      }}
    />
  );
};
