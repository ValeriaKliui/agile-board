import { PlusCircleOutlined } from '@ant-design/icons';
import { useColumnCreator } from '@pages/board/hooks';
import { CreatorModal, Icon } from '@shared/components';
import { useModal } from '@shared/hooks';
import { type Column, } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

import { ColumnCreatorForm } from './Form';
import { ColumnStyled } from './styled';
import { ColumnCreatorProps } from './types';

export const ColumnCreator = observer(({ lastColumnOrder }: ColumnCreatorProps) => {
    const { openModal, isModalOpen, closeModal } = useModal();
    const [form] = Form.useForm<Column>();

    const { createColumn, newColumnOrder, isLoading } = useColumnCreator({
        form, onSuccess: closeModal, lastColumnOrder
    });

    return (
        <>
            <ColumnStyled hoverable onClick={openModal}>
                <Icon icon={PlusCircleOutlined} size={30} />
            </ColumnStyled>
            <CreatorModal isModalOpen={isModalOpen} onClose={closeModal}>
                <ColumnCreatorForm form={form} isCreating={isLoading} order={newColumnOrder} onFinish={createColumn} />
            </CreatorModal>
        </>
    );
});
