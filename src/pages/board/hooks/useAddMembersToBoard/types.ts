import { MembersFormValues } from '@pages/board/components';
import { FormInstance } from 'antd';

export interface UseAddMembersToBoardProps {
  form: FormInstance<MembersFormValues>;
  onSuccess?: () => void;
}
