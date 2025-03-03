import { hasPermission } from '@pages/board/utils';
import { Button, CreatorModal } from '@shared/components';
import { PERMISSIONS } from '@shared/constants';
import { useModal } from '@shared/hooks';
import { Column, } from '@store';
import { Flex, } from 'antd';

import { TaskCreatorForm } from './Form';

export const TaskCreatorModal = ({ columnID }: Pick<Column, 'columnID'>) => {
  const { isModalOpen, closeModal, openModal } = useModal();

  const onSuccess = () => {
    closeModal()
  }

  return (
    <Flex vertical justify="center" align="center">
      {hasPermission(PERMISSIONS.tasks.create) && (
        <Button size="large" type="primary" block onClick={openModal}>
          New task
        </Button>
      )}
      <CreatorModal isModalOpen={isModalOpen} onClose={closeModal}>
        <TaskCreatorForm
          onSuccess={onSuccess}
          columnID={columnID}
        />
      </CreatorModal>
    </Flex>
  );
}