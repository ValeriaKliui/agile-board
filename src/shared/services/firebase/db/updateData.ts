import { db } from '@config';
import { doc, DocumentData, updateDoc, WithFieldValue } from 'firebase/firestore';

export const updateData = async <T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  docID: string,
  data: T,
) => {
  try {
    const docRef = doc(db, collectionName, docID);
    await updateDoc(docRef, data);
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Failed to update document in ${collectionName} with ID ${docID}: ${error.message}`,
      );
  }
};
