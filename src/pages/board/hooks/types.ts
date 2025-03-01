import { FormInstance } from 'antd';

export type UseTaskCreatorParams = {
  form: FormInstance;
  columnID: string;
  onSuccess: () => void;
};
export type UseColumnCreatorParams = {
  form: FormInstance;
  lastColumnOrder: number;
  onSuccess: () => void;
};
