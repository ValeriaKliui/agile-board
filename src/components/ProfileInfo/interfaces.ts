import { User } from '@store/user/interfaces';

export type ProfileInfoProps = Pick<User, 'avatar' | 'email' | 'username'>;
