import { ModalProps } from '@shared/components';
import { AuthFormPropsDefault } from '@shared/types';

export interface ForgotPasswordFormProps<TFormValues, TForm>
  extends AuthFormPropsDefault<TFormValues, TForm> {
  modalProps: ModalProps;
}
