import { AddMembersForm } from '@pages/board/components';
import { useAddMembersToBoard } from '@pages/board/hooks';
import { Modal, ModalProps } from '@shared/components';
import { MemberRoleType } from '@shared/types';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { MembersFormValues } from './types';

export const AddMembersModal = observer(({ isModalOpen, onClose: onSuccess }: ModalProps) => {
  const [form] = Form.useForm<MembersFormValues>();
  const [selectedMembers, setSelectedMembers] = useState<MemberRoleType[]>([]);

  const { handleFormSubmit, isAdding } = useAddMembersToBoard({ form, onSuccess });

  const handleValuesChange = ({ selectedMembers }: MembersFormValues) => {
    if (selectedMembers) {
      setSelectedMembers(selectedMembers);
    }
  };

  return (
    <Modal isModalOpen={isModalOpen} onCancel={onSuccess} onClose={onSuccess}>
      <AddMembersForm
        form={form}
        selectedMembers={selectedMembers}
        onValuesChange={handleValuesChange}
        onFinish={handleFormSubmit}
        isAdding={isAdding}
      />
    </Modal>
  );
});
