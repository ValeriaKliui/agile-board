import { db } from '@config';
import { BOARDS_DB_NAME, ROLES, USER_BOARDS_DB_NAME } from '@constants';
import { AddingMembersProps } from '@shared/services/firebase/db/types';
import { doc, setDoc } from 'firebase/firestore';

export const addMembersToBoard = async ({ boardID, members, owner }: AddingMembersProps) => {
  const membersArray = Object.entries(members);
  membersArray.push([owner, ROLES.OWNER]);

  for (const [userID, role] of membersArray) {
    const userBoardRef = doc(db, USER_BOARDS_DB_NAME, userID, BOARDS_DB_NAME, boardID);
    await setDoc(userBoardRef, { role });
  }
};
