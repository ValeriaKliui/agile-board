import { Button, Modal as ModalAntd } from 'antd';
import React from 'react';

import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  onOk,
  onCancel,
  children,
  ...modalProps
}) => {
  return (
    <ModalAntd
      centered
      title={title}
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onOk}>
          OK
        </Button>,
      ]}
      {...modalProps}
    >
      {children}
    </ModalAntd>
  );
};
