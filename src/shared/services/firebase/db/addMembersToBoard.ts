import { db } from '@config';
import { BOARDS_DB_NAME, USER_BOARDS_DB_NAME } from '@constants';
import { AddingMembersProps } from '@shared/services/firebase/db/types';
import { doc, setDoc } from 'firebase/firestore';

export const addMembersToBoard = async ({ id, members }: AddingMembersProps) => {
  const membersArray = Object.entries(members);

  for (const [userID, role] of membersArray) {
    const userBoardRef = doc(db, USER_BOARDS_DB_NAME, userID, BOARDS_DB_NAME, id);
    await setDoc(userBoardRef, { role });
  }
};
