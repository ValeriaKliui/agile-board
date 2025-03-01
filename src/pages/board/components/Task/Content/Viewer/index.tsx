import { CalendarOutlined, ClockCircleOutlined, CrownOutlined, UserOutlined } from "@ant-design/icons";
import { Task } from "@store"
import { Flex, Typography } from "antd";

const { Text, Title } = Typography;


export const TaskViewer = ({ title, description, createdAt, assignedTo, author, executionDate }: Task) => {
    return <Flex justify="space-between">
        <Flex vertical>
            <Title level={4}>{title}</Title>
            <Text>{description}</Text>
        </Flex>
        <Flex vertical>
            <Flex gap="small">
                <CalendarOutlined />
                <Text>
                    <strong>Created:</strong> {createdAt}
                </Text>
            </Flex>
            <Flex gap="small">
                <ClockCircleOutlined />
                <Text>
                    <strong>Execute:</strong> {executionDate}
                </Text>
            </Flex>
            <Flex gap="small">
                <CrownOutlined />
                <Text>
                    <strong>Author:</strong> {author?.username}
                </Text>
            </Flex>
            <Flex gap="small">
                <UserOutlined />
                <Text>
                    <strong>Assigned to:</strong> {assignedTo?.username}
                </Text>
            </Flex>
        </Flex>
    </Flex>
}
