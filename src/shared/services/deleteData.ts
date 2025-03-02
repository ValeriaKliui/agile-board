import { db } from '@config';
import { deleteDoc, doc } from 'firebase/firestore';

export const deleteData = async (collectionName: string, docID: string) => {
  try {
    const docRef = doc(db, collectionName, docID);

    await deleteDoc(docRef);
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Failed to delete document in ${collectionName} with ID ${docID}: ${error.message}`,
      );
  }
};
