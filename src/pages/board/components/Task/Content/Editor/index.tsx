import { getMembersOptions } from "@pages/board/utils";
import { Button, Select } from "@shared/components";
import { boardStore, tasksStore } from "@store";
import { Flex, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";

import { TaskEditorProps } from "./types";

const { Item } = Form

export const TaskEditor = observer(({ isEditing, onEditFinish, taskID, title, description, assignedTo }: TaskEditorProps) => {
    const [form] = Form.useForm()
    const boardID = boardStore.currentBoardInfo?.boardID
    const membersOptions = useMemo(() => getMembersOptions(boardStore.membersInfo), []);
    const assignedUser = assignedTo?.userID
    const isUpdating = tasksStore.isLoading

    const onFinishEdit = async () => {
        const task = form.getFieldsValue(true)

        if (boardID) await tasksStore.updateTask({ ...task, boardID, taskID })
        onEditFinish()
    };

    return <Form form={form} onFinish={onFinishEdit} disabled={!isEditing}>
        <Flex justify="space-between">
            <Flex vertical>
                <Item name="title" label='title' initialValue={title}>
                    <Input />
                </Item>
                <Item name="description" label='description' initialValue={description}>
                    <Input />
                </Item>
                <Item name="assignedTo" initialValue={assignedUser}>
                    <Select options={membersOptions} />
                </Item>
                <Item>
                    <Button htmlType='submit' type='primary' loading={isUpdating}  >Save </Button>
                </Item>
            </Flex>
        </Flex>
    </Form>
})
