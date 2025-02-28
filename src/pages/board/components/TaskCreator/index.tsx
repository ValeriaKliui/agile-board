import { Button, CreatorModal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { boardStore, Column, Task, tasksStore, userStore } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

import { TaskCreatorForm } from './Form';

export const TaskCreator = observer(({ columnID }: Pick<Column, 'columnID'>) => {
  const [form] = Form.useForm<Task>();
  const { isModalOpen, closeModal, openModal } = useModal();

  const onFinish = async () => {
    const taskData: Task = form.getFieldsValue(true);
    const userID = userStore.user?.userID;

    if (userID) {
      const task = { ...taskData, author: userID };
      await tasksStore.addTask({ columnID, task });
    }
  };

  const members = boardStore.currentBoardInfo?.members;

  return (
    <div>
      <Button type="primary" block onClick={openModal}>
        New task
      </Button>
      <CreatorModal isModalOpen={isModalOpen} onClose={closeModal}>
        <TaskCreatorForm form={form} columnID={columnID} onFinish={onFinish} members={members} />
      </CreatorModal>
    </div>
  );
});
