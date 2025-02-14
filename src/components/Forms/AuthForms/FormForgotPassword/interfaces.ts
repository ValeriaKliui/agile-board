import { AuthFormPropsDefault } from '@components/Forms/AuthForms/interfaces';
import { ModalProps } from '@components/Modal/interfaces';

export interface FormForgotPasswordProps<T>
  extends AuthFormPropsDefault<T> {
  modalProps: ModalProps;
}
