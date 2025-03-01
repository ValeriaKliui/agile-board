import { useTaskCreator } from '@pages/board/hooks';
import { Button, CreatorModal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { Column, Task } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

import { TaskCreatorForm } from './Form';

export const TaskCreator = observer(({ columnID }: Pick<Column, 'columnID'>) => {
  const [form] = Form.useForm<Task>();
  const { isModalOpen, closeModal, openModal } = useModal();

  const { onFinish, membersOptions, priorityOptions } = useTaskCreator(form, columnID, closeModal);

  return (
    <div>
      <Button type="primary" block onClick={openModal}>
        New task
      </Button>
      <CreatorModal isModalOpen={isModalOpen} onClose={closeModal}>
        <TaskCreatorForm
          form={form}
          onFinish={onFinish}
          membersOptions={membersOptions}
          priorityOptions={priorityOptions}
        />
      </CreatorModal>
    </div>
  );
});
