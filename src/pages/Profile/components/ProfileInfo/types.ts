import { type User } from '@store/user';

export type ProfileInfoProps = Pick<User, 'avatar' | 'email' | 'username'>;
