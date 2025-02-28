import { type User } from '@store';

export type ProfileInfoProps = Pick<User, 'avatar' | 'email' | 'username'>;
