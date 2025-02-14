import { AuthFormPropsDefault } from '@components/Forms/AuthForms/interfaces';
import { ModalProps } from '@components/Modal/interfaces';

export interface FormForgotPasswordProps<TFormValues, TForm>
  extends AuthFormPropsDefault<TFormValues, TForm> {
  modalProps: ModalProps;
}
