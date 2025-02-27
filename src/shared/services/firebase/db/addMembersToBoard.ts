import { db } from '@config';
import { BOARDS_COLLECTION_NAME, ROLES, USER_BOARDS_COLLECTION_NAME } from '@constants';
import { doc, setDoc } from 'firebase/firestore';

import { AddingMembersProps } from './types';

export const addMembersToBoard = async ({ boardID, members, owner }: AddingMembersProps) => {
  const membersArray = [...Object.entries(members), [owner, ROLES.OWNER]];

  try {
    const membersPromises = membersArray.map(([userID, role]) => {
      const userBoardRef = doc(
        db,
        USER_BOARDS_COLLECTION_NAME,
        userID,
        BOARDS_COLLECTION_NAME,
        boardID,
      );
      return setDoc(userBoardRef, { role });
    });

    await Promise.all(membersPromises);
  } catch (error) {
    if (error instanceof Error) throw new Error('Failed to add members to board');
  }
};
