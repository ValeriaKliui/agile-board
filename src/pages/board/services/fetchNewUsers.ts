import { USERS_COLLECTION_NAME } from '@constants';
import { ROLES } from '@shared/constants';
import { getCollection } from '@shared/services';
import { User } from '@store';

export const fetchNewUsers = (searchTerm: string, currMembers?: { [user: string]: ROLES }) =>
  getCollection<User>({
    collectionPaths: [USERS_COLLECTION_NAME],
    searchKey: 'username',
    searchTerm,
    filterKey: 'userID',
    filterValues: currMembers && Object.keys(currMembers),
  });
