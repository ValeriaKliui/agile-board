import { Button, Modal as ModalAntd } from 'antd';
import { memo } from 'react';

import { ModalProps } from './types';

export const Modal = memo(
  ({ visible, title, onOk, onCancel, children, ...modalProps }: ModalProps) => {
    const defaultFooter = [
      <Button key="back" onClick={onCancel}>
        Cancel
      </Button>,
      <Button key="submit" type="primary" onClick={onOk}>
        OK
      </Button>,
    ];

    return (
      <ModalAntd
        centered
        title={title}
        open={visible}
        onOk={onOk}
        onCancel={onCancel}
        footer={modalProps.footer ?? defaultFooter}
        {...modalProps}
      >
        {children}
      </ModalAntd>
    );
  },
);
