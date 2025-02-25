import { ROLES_VALUES } from '@constants';
import { Timestamp } from 'firebase/firestore';

export interface UserBoard {
  id: string;
  role: ROLES_VALUES;
}
export interface DateTimeParams {
  timestamp?: Timestamp;
  format?: string;
}
