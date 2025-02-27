import { PlusCircleOutlined } from '@ant-design/icons';
import { ColumnCreatorForm, ColumnCreatorModal } from '@pages/board/components';
import { Icon } from '@shared/components';
import { useModal } from '@shared/hooks';
import { boardStore, type Column, columnsStore } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

import { ColumnStyled } from './styled';
import { ColumnCreatorProps } from './types';

export const ColumnCreator = observer(({ lastColumnOrder }: ColumnCreatorProps) => {
    const { openModal, isModalOpen, closeModal } = useModal()
    const [form] = Form.useForm<Column>()

    const newColumnOrder = lastColumnOrder + 1

    const createColumn = async () => {
        const newColumn = form.getFieldsValue()
        const boardID = boardStore.currentBoardInfo?.boardID
        if (boardID) await columnsStore.addColumns({ boardID, columns: [newColumn] })
        closeModal()
    }

    return (
        <>
            <ColumnStyled hoverable onClick={openModal}>
                <Icon icon={PlusCircleOutlined} size={30} />
            </ColumnStyled>
            <ColumnCreatorModal isModalOpen={isModalOpen} onClose={closeModal}>
                <ColumnCreatorForm form={form} order={newColumnOrder} onFinish={createColumn} />
            </ColumnCreatorModal>
        </>
    );
})
