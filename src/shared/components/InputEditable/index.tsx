import { EditOutlined } from '@ant-design/icons';
import { InputStyled } from '@shared/components/InputEditable/styled';
import { FormEvent } from 'react';

import { InputEditableProps } from './types';

export const InputEditable = ({ onFinishEdit, isEditing, strong, ...inputProps }: InputEditableProps) => {
    const onFinish = (event: FormEvent<HTMLInputElement>) => {
        onFinishEdit?.(event.currentTarget.value);
    };

    return (
        <InputStyled
            suffix={isEditing ? <EditOutlined /> : <span />}
            onPressEnter={onFinish}
            onBlur={onFinish}
            variant="underlined"
            $strong={strong}
            {...inputProps}
        />
    );
};
