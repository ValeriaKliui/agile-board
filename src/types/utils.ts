import { Auth } from 'firebase/auth';

export interface RegisterUserProps {
  auth: Auth;
  email: string;
  password: string;
}
