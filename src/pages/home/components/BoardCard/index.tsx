import { ROLES_PERMISSIONS } from "@constants";
import { formatDatetime } from "@services/firebase/db";
import { BoardInfo } from "@store/boards/types";
import { Flex, Typography } from "antd";

import { CardStyled } from "./styled";

const { Text } =
    Typography

export const BoardCard = ({ title, createdAt, owner, userRole }: BoardInfo) => {
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
