import { ModalProps as ModalPropsAntd } from 'antd';
import { PropsWithChildren } from 'react';

export interface ModalProps extends ModalPropsAntd, PropsWithChildren {
  visible: boolean;
}
