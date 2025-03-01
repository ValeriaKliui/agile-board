import { CalendarOutlined, ClockCircleOutlined, CrownOutlined, UserOutlined } from "@ant-design/icons";
import { InfoRow, TaskWithUser } from "@pages/board/components";
import { Flex, Typography } from "antd";

const { Title, Text } = Typography;

export const TaskViewer = ({
    title,
    description,
    createdAt,
    assignedTo,
    author,
    executionDate,
}: TaskWithUser) => (
    <Flex justify="space-between">
        <Flex vertical>
            <Title level={4}>{title}</Title>
            <Text>{description}</Text>
        </Flex>
        <Flex vertical>
            <InfoRow Icon={CalendarOutlined} label="Created" value={createdAt} />
            <InfoRow Icon={ClockCircleOutlined} label="Execute" value={executionDate} />
            <InfoRow Icon={CrownOutlined} label="Author" value={author?.username} />
            <InfoRow Icon={UserOutlined} label="Assigned to" value={assignedTo?.username} />
        </Flex>
    </Flex>
);
