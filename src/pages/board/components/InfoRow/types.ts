import { ElementType, ReactNode } from 'react';

export interface InfoRowProps {
  Icon: ElementType;
  label: string;
  value: string | ReactNode;
  twoToneColor?: string;
}
