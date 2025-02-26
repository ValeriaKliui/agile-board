import { db } from '@config';
import { BOARDS_DB_NAME, USER_BOARDS_DB_NAME } from '@constants';
import { AddingMembersProps } from '@shared/services/firebase/db/types';
import { doc, setDoc } from 'firebase/firestore';

export const addMembersToBoard = async ({ id, members }: AddingMembersProps) => {
  const membersArray = Object.entries(members);

  try {
    const membersPromises = membersArray.map(([userID, role]) => {
      const userBoardRef = doc(db, USER_BOARDS_DB_NAME, userID, BOARDS_DB_NAME, id);
      return setDoc(userBoardRef, { role });
    });

    await Promise.all(membersPromises);
  } catch (error) {
    if (error instanceof Error) throw new Error('Failed to add members to board');
  }
};
