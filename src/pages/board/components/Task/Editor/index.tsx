import { hasPermission } from '@pages/board/utils';
import { Button } from '@shared/components';
import { InputEditable } from '@shared/components/InputEditable';
import { PERMISSIONS } from '@shared/constants';
import { boardStore, tasksStore } from '@store';
import { Form, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

const { Text, Title } = Typography;
const { Item } = Form

export const TaskEditor = observer(({ title, description, taskID }) => {
    const canEdit = useMemo(() => hasPermission({ permission: PERMISSIONS.tasks.edit }), []);
    const [form] = Form.useForm()

    const onFinishEdit = async () => {
        const task = form.getFieldsValue()
        await tasksStore.updateTask({ task, boardID: boardStore.currentBoardInfo?.boardID, taskID })
    };

    const editableContent = canEdit ? (
        <>
            <Form form={form} onFinish={onFinishEdit}>
                <Item name="title" initialValue={title}>
                    <InputEditable />
                </Item>
                <Item name="description" initialValue={description}>
                    <InputEditable />
                </Item>
                <Item>
                    <Button htmlType='submit' type='primary' >Save </Button>
                </Item>
            </Form>
        </>
    ) : (
        <>
            <Title level={4}>{title}</Title>
            <Text>{description}</Text>
        </>);

    return <div>{editableContent}</div>;
});
