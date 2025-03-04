import { Flex, Typography } from 'antd';

import { InfoRowProps } from './types';

const { Text } = Typography;

export const InfoRow = ({ Icon, label, value, twoToneColor, vertical = false }: InfoRowProps) => (
  <Flex gap="small" vertical={vertical}>
    <Flex gap="small">
      <Icon twoToneColor={twoToneColor} />
      <Text strong>{label}:</Text>
    </Flex>
    <Text>{value}</Text>
  </Flex>
);
