import { Button, RadioGroup, Select } from '@shared/components';
import { TASK_PRIORITY } from '@store';
import { Flex, Form, FormInstance, Input, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import { TaskCreatorFormProps } from './types';

const { Item } = Form;
const { Text } = Typography;

export const TaskCreatorForm = <TForm extends FormInstance<TFormValues> | undefined, TFormValues>({
    form,
    onFinish,
    membersOptions,
    priorityOptions,
}: TaskCreatorFormProps<TFormValues, TForm>) => {
    return (
        <Form form={form} onFinish={onFinish}>
            <Item
                name="title"
                label="Task name"
                rules={[{ required: true, message: 'Please input task title' }]}
            >
                <Input placeholder="Task" />
            </Item>
            <Item name="description" label="Description">
                <TextArea />
            </Item>
            <Item name="priority" label="Choose priority" initialValue={TASK_PRIORITY.LOW}>
                <RadioGroup options={priorityOptions} />
            </Item>
            <Flex vertical gap="small">
                <Text strong>Assign to: </Text>
                <Item name="assignedTo">
                    <Select options={membersOptions} />
                </Item>
            </Flex>
            <Item>
                <Button htmlType="submit" type="primary">
                    Add task
                </Button>
            </Item>
        </Form>
    );
};
