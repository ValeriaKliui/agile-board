import { Card } from "antd";
import { formatDatetime } from "services/firebase/db/formatDatetime";

export const BoardCard = ({ title, createdAt }) => {
    const dateTime = formatDatetime({ timestamp: createdAt })

    return <Card title={title}>{dateTime}</Card>
};
