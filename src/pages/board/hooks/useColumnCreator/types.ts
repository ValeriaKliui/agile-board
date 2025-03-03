import { FormInstance } from 'antd';

export type UseColumnCreatorParams = {
  form: FormInstance;
  lastColumnOrder: number;
  onSuccess: () => void;
};
