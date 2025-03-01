import { Task } from "@store"
import { Typography } from "antd";

const { Text, Title } = Typography;

export const TaskViewer = ({ title, description }: Pick<Task, 'title' | 'description'>) => {
    return <>
        <Title level={4}>{title}</Title>
        <Text>{description}</Text>
    </>
}
