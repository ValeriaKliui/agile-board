import { getMembersOptions } from "@pages/board/utils";
import { Button, InputEditable, Select } from "@shared/components";
import { boardStore, tasksStore } from "@store";
import { Flex, Form } from "antd";

import { TaskEditorProps } from "./types";

const { Item } = Form

export const TaskEditor = ({ isEditing, toggleEditing, taskID, title, description, boardID }: TaskEditorProps) => {
    const [form] = Form.useForm()

    const membersOptions = getMembersOptions(boardStore.membersInfo)

    const onFinishEdit = async () => {
        const task = form.getFieldsValue()
        if (boardID) await tasksStore.updateTask({ task, boardID, taskID })
        toggleEditing()
    };

    return <Form form={form} onFinish={onFinishEdit} disabled={!isEditing}>
        <Flex justify="space-between">
            <Flex vertical>
                <Item name="title" initialValue={title}>
                    <InputEditable isEditing={isEditing} />
                </Item>
                <Item name="description" initialValue={description}>
                    <InputEditable isEditing={isEditing} />
                </Item>
                <Item name="assignedTo" >
                    <Select options={membersOptions} />
                </Item>
                <Item>
                    <Button htmlType='submit' type='primary'  >Save </Button>
                </Item>
            </Flex>
        </Flex>
    </Form>
}
