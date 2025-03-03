import { CalendarOutlined, ClockCircleOutlined, CrownOutlined, UserOutlined } from "@ant-design/icons";
import { TaskWithUser } from "@pages/board/components";
import { TASK_PRIORITY_COLORS } from "@pages/board/constants";
import { InfoRow } from "@shared/components";
import { formatDatetime, getTimeDistance } from "@shared/utils";
import { Flex, Typography } from "antd";

import { Container,Description, Details, PriorityStyled } from "./styled";

const { Title, Text } = Typography;

export const TaskViewer = ({
    title,
    description,
    createdAt,
    assignedTo,
    author,
    executionDate, priority
}: TaskWithUser) => {
    const createdData = formatDatetime(createdAt)
    const executionData = formatDatetime(executionDate)

    const deadline = getTimeDistance(executionDate)

    return <Container >
        <Flex vertical gap='middle'>
            <div>
                <PriorityStyled $color={TASK_PRIORITY_COLORS[priority]}>urgency: {priority}</PriorityStyled>

                <Title level={4}>{title}</Title>
            </div>
            <Description >{description}</Description>
            <Text ><strong>Deadline in: </strong>{deadline}</Text>
        </Flex>
        <Details vertical gap='middle'>
            <InfoRow Icon={CalendarOutlined} label="Created" value={createdData} />
            <InfoRow Icon={ClockCircleOutlined} label="Execute" value={executionData} />
            <InfoRow Icon={CrownOutlined} label="Author" value={author?.username} />
            <InfoRow Icon={UserOutlined} label="Assigned to" value={assignedTo?.username} />
        </Details>
    </Container>
}
