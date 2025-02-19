import { AuthFormPropsDefault } from '@components/Forms/Auth/types';
import { ModalProps } from '@components/Modal/types';

export interface ForgotPasswordFormProps<TFormValues, TForm>
  extends AuthFormPropsDefault<TFormValues, TForm> {
  modalProps: ModalProps;
}
