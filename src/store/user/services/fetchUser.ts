import { USERS_COLLECTION_NAME } from '@constants';
import { getData } from '@shared/services';
import { User } from '@store';

export const fetchUser = async ({ userID }: Pick<User, 'userID'>) => {
  try {
    const user = await getData<User>(USERS_COLLECTION_NAME, userID);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error fetching user: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
