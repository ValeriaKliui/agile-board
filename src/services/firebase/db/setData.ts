import { db } from '@config';
import { doc, DocumentData, setDoc, WithFieldValue } from 'firebase/firestore';

export const setData = async <T extends WithFieldValue<DocumentData>>(
  collection: string,
  docID: string,
  data: T,
) => {
  try {
    const docRef = doc(db, collection, docID);
    await setDoc(docRef, data);
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Failed to create document in ${collection} with ID ${docID}: ${error.message}`,
      );
  }
};
