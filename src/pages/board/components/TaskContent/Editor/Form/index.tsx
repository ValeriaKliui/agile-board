import { getPriorityOptions } from '@pages/board/utils';
import { Button, Select } from '@shared/components';
import { Flex, Form, FormInstance, Input } from 'antd';

import { TaskEditorFormFormProps } from './types';

const { Item } = Form;
const { TextArea } = Input;

export const TaskEditorForm = <TForm extends FormInstance<TFormValues> | undefined, TFormValues>({
  form,
  onSubmit,
  disabled,
  title,
  description,
  assignedTo,
  priority,
  isUpdating,
  membersOptions = [],
}: TaskEditorFormFormProps<TForm, TFormValues>) => {
  const priorityOptions = getPriorityOptions();

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      disabled={disabled}
      variant="underlined"
      labelCol={{ xs: 24, sm: 8 }}
      wrapperCol={{ xs: 24, sm: 16 }}
      layout="horizontal"
      style={{ width: '100%' }}
    >
      <Flex justify="space-between" style={{ width: '100%' }}>
        <Flex vertical style={{ width: '100%' }}>
          <Item name="title" label="Task title" initialValue={title} labelAlign="left">
            <Input />
          </Item>
          <Item name="description" label="Description" initialValue={description} labelAlign="left">
            <TextArea />
          </Item>
          <Item
            name="assignedTo"
            initialValue={assignedTo?.userID}
            label="Assignee"
            labelAlign="left"
          >
            <Select options={membersOptions} />
          </Item>
          <Item name="priority" label="Priority" initialValue={priority} labelAlign="left">
            <Select options={priorityOptions} />
          </Item>
          <Item>
            <Button htmlType="submit" type="primary" loading={isUpdating}>
              Save{' '}
            </Button>
          </Item>
        </Flex>
      </Flex>
    </Form>
  );
};
