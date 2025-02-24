import { ROLES_PERMISSIONS } from "@constants";
import { BoardCardProps } from "@pages/home/components";
import { formatDatetime } from "@pages/home/services";
import { Flex, Typography } from "antd";

import { CardStyled } from "./styled";

const { Text } = Typography

export const BoardCard = ({ title, createdAt, owner, userRole }: BoardCardProps) => {
    const dateTime = formatDatetime({ timestamp: createdAt })

    return <CardStyled hoverable title={title} style={{ background: ROLES_PERMISSIONS[userRole].color }} size="small">
        <Flex gap='small'>
            <Text strong>
                Created at:
            </Text>
            <Text>
                {dateTime}
            </Text>
        </Flex>
        <Flex gap='small'>
            <Text strong>
                Board owner:
            </Text>
            <Text> {owner}</Text>
        </Flex>
    </CardStyled>
};
