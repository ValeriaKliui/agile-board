import { FormInstance } from 'antd';

export type UseTaskCreatorParams = {
  form: FormInstance;
  columnID: string;
  onSuccess: () => void;
};
