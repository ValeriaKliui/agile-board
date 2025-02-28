import { getUsersByIDs } from "@pages/board/services/getUserByIDs";
import { Option } from "@pages/home/utils/transformObjectToOptions";
import { Button, RadioGroup, Select } from "@shared/components"
import { Flex, Form, Input, Typography } from "antd"
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { TASK_PRIORITY } from "store/tasks/types";

const { Item } = Form
const { Text } = Typography

export const TaskCreatorForm = ({ form, columnID, onFinish, members }) => {
    const [membersOptions, setMembersOptions] = useState<Option[]>([])
    const priorityOptions = Object.values(TASK_PRIORITY).map((value) => ({ value, label: value }))

    useEffect(() => {
        const fetchUsers = async () => {
            const membersData = await getUsersByIDs({ IDs: Object.keys(members) })
            if (membersData) setMembersOptions(membersData?.map(({ userID, username }) => ({ label: username, value: userID })))
        }
        fetchUsers()
    }, [members])


    return <Form form={form} onFinish={onFinish}>
        <Item hidden>
            <Input defaultValue={columnID} />
        </Item>
        <Item name='title' label='Task name' rules={[{ required: true, message: 'Please input task title' }]}>
            <Input placeholder="Task" />
        </Item>
        <Item name='description' label='Description'>
            <TextArea />
        </Item>
        <Item name='priority' label='Choose priority' initialValue={TASK_PRIORITY.LOW}>
            <RadioGroup options={priorityOptions} />
        </Item>
        <Flex vertical gap='small'>
            <Text strong>Assign to: </Text>
            <Item name='assignedTo'>
                <Select options={membersOptions} />
            </Item>
        </Flex>
        <Item>
            <Button htmlType='submit' type='primary'>Add task</Button>
        </Item>
    </Form >
}