import { AddSearchMembers } from '@pages/board/components';
import { MembersRolesList } from '@shared/components';
import { getRolesOptions } from '@shared/utils';
import { Button, Form, } from 'antd';

const { Item } = Form

export const AddMembersForm = ({
    form,
    selectedMembers,
    onValuesChange,
    onFinish,
    isAdding,
}) => {
    const rolesOptions = getRolesOptions();

    return <Form form={form} onFinish={onFinish} onValuesChange={onValuesChange}>
        <AddSearchMembers />
        <Item>
            <Button htmlType="submit" type='primary' loading={isAdding}>
                Invite
            </Button>
        </Item>
        <MembersRolesList members={selectedMembers} roles={rolesOptions} />
    </Form>
}

