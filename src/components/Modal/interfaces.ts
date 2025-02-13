import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  visible: boolean;
  title: string;
  onOk: () => void;
  onCancel: () => void;
}
