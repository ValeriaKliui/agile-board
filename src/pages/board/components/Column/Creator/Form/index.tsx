import { setRequiredRule } from '@shared/utils';
import { Button, Form, FormInstance, Input } from 'antd';

import { ColumnCreatorFormProps } from './types';

const { Item } = Form;

export const ColumnCreatorForm = <TFormValues,>({
    form,
    order,
    onFinish, isCreating
}: ColumnCreatorFormProps<FormInstance<TFormValues> | undefined, TFormValues>) => {
    const rules = setRequiredRule('column title');

    return (
        <Form form={form} onFinish={onFinish}>
            <Item name="order" initialValue={order} hidden>
                <Input />
            </Item>
            <Item name="title" label="Column name" rules={rules}>
                <Input placeholder="Column name" />
            </Item>
            <Button htmlType="submit" type="primary" loading={isCreating}>
                Create
            </Button>
        </Form>
    );
};
