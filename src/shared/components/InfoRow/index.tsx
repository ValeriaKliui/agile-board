import { Flex, Typography } from "antd";

import { InfoRowProps } from "./types";

const { Text } = Typography

export const InfoRow = ({
    Icon,
    label,
    value,
    twoToneColor,
}: InfoRowProps) => (
    <Flex gap="small">
        <Icon twoToneColor={twoToneColor} />
        <Text>
            <strong>{label}:</strong> {value}
        </Text>
    </Flex>
);
