import { USERS_COLLECTION_NAME } from '@constants';
import { getDocumentsByIds } from '@shared/services';
import { User } from '@store';

import { UserByIDsParams } from './types';

export const getUsersByIDs = async ({ IDs }: UserByIDsParams) => {
  try {
    const users = await getDocumentsByIds<User>(USERS_COLLECTION_NAME, IDs);

    return users;
  } catch (error) {
    console.error('Getting IDs error:', error);
    if (error instanceof Error) return new Error(error.message);
  }
};
