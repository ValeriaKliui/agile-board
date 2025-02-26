import { USERS_DB_NAME } from '@constants';
import { UserByIDsParams } from '@pages/board/services/types';
import { getDocumentsByIds } from '@shared/services/firebase';
import { User } from '@store';

export const getUsersByIDs = async ({ IDs }: UserByIDsParams) => {
  try {
    const users = await getDocumentsByIds<User>(USERS_DB_NAME, IDs);

    return users;
  } catch (error) {
    if (error instanceof Error) return new Error(error.message);
  }
};
