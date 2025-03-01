import { Button, InputEditable } from "@shared/components";
import { tasksStore } from "@store";
import { Form } from "antd";

import { TaskEditorProps } from "./types";

const { Item } = Form

export const TaskEditor = ({ taskID, title, description, boardID }: TaskEditorProps) => {
    const [form] = Form.useForm()

    const onFinishEdit = async () => {
        const task = form.getFieldsValue()
        if (boardID) await tasksStore.updateTask({ task, boardID, taskID })
    };

    return <Form form={form} onFinish={onFinishEdit}>
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
}
