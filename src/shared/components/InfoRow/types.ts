import { FlexProps } from 'antd';
import { ElementType, ReactNode } from 'react';

export type InfoRowProps = Pick<FlexProps, 'vertical'> & {
  Icon: ElementType;
  label: string;
  value: string | ReactNode;
  twoToneColor?: string;
};
