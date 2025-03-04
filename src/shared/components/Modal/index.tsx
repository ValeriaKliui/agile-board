import { Button, Modal as ModalAntd } from 'antd';
import { memo } from 'react';

import { ModalContent } from './styled';
import { ModalProps } from './types';

export const Modal = memo(
  ({ isModalOpen, title, onOk, onCancel, children, footer = false, ...modalProps }: ModalProps) => {
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
        open={isModalOpen}
        onOk={onOk}
        onCancel={onCancel}
        footer={footer ?? defaultFooter}
        width={{
          xs: '90%',
          sm: '80%',
          md: '70%',
          lg: '60%',
          xl: '50%',
          xxl: '40%',
        }}
        {...modalProps}
      >
        <ModalContent>{children}</ModalContent>
      </ModalAntd>
    );
  },
);
