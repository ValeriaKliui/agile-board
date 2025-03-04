import { AddSearchMembers } from '@pages/board/components';
import { MembersRolesList } from '@shared/components';
import { getRolesOptions } from '@shared/utils';
import { Button, Form, FormInstance } from 'antd';

import { AddMembersFormProps } from './types';

const { Item } = Form;

export const AddMembersForm = <TFormValues,>({
  form,
  selectedMembers,
  onValuesChange,
  onFinish,
  isAdding,
}: AddMembersFormProps<FormInstance<TFormValues> | undefined, TFormValues>) => {
  const rolesOptions = getRolesOptions();

  return (
    <Form form={form} onFinish={onFinish} onValuesChange={onValuesChange}>
      <AddSearchMembers />
      <MembersRolesList members={selectedMembers} roles={rolesOptions} />
      <Item>
        <Button htmlType="submit" type="primary" loading={isAdding}>
          Invite
        </Button>
      </Item>
    </Form>
  );
};
