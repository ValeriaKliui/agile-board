import { User } from '@store/user/types';

export type ProfileInfoProps = Pick<User, 'avatar' | 'email' | 'username'>;
