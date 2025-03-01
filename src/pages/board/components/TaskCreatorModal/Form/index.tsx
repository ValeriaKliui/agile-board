import { useTaskCreator } from '@pages/board/hooks';
import { getMembersOptions, getPriorityOptions } from '@pages/board/utils';
import { Button, RadioGroup, Select } from '@shared/components';
import { setRequiredRule } from '@shared/utils';
import { boardStore, TASK_PRIORITY, TaskInitial } from '@store';
import { DatePicker, Flex, Form, Input, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

import { AssigningContainer } from './styled';
import { TaskCreatorFormProps } from './types';

const { Item } = Form;
const { Text } = Typography;

export const TaskCreatorForm = observer(({ onSuccess, columnID }: TaskCreatorFormProps) => {
    const [form] = Form.useForm<TaskInitial>();

    const membersOptions = useMemo(() => getMembersOptions(boardStore.membersInfo), []);
    const priorityOptions = useMemo(() => getPriorityOptions(), []);

    const { onFinish, isCreating } = useTaskCreator({ columnID, onSuccess, form });

    return (
        <Form form={form} onFinish={onFinish} layout="vertical">
            <Item name="title" label="Task Name" rules={setRequiredRule('task title')}>
                <Input placeholder="Enter task title" />
            </Item>

            <Item name="description" label="Description" rules={setRequiredRule('description')}>
                <TextArea placeholder="Enter task description" rows={3} />
            </Item>

            <Item name="priority" label="Priority" initialValue={TASK_PRIORITY.LOW}>
                <RadioGroup options={priorityOptions} />
            </Item>

            <Flex justify="space-between" align="flex-end" gap="middle">
                <AssigningContainer vertical gap="small">
                    <Text strong>Assign to:</Text>
                    <Item name="assignedTo" rules={setRequiredRule('executor')}>
                        <Select options={membersOptions} placeholder="Select assignee" />
                    </Item>
                </AssigningContainer>

                <Item name="executionDate" rules={setRequiredRule('execution date')}>
                    <DatePicker placeholder="Execution date" />
                </Item>
            </Flex>

            <Item>
                <Button loading={isCreating} htmlType="submit" type="primary" block>
                    Add Task
                </Button>
            </Item>
        </Form>
    );
})