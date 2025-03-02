import { USERS_COLLECTION_NAME } from '@constants';
import { updateData } from '@shared/services';
import { filterUndefinedValues } from '@shared/utils';
import { User } from '@store';

export const updateUser = async ({ userID, ...user }: Partial<User>) => {
  try {
    const newUserData = filterUndefinedValues(user);

    if (userID)
      await updateData({
        collectionPaths: [USERS_COLLECTION_NAME, userID],
        data: newUserData,
      });
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error updating user: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
