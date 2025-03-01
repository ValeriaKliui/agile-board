import { db } from '@config';
import { doc, getDoc } from 'firebase/firestore';

export const getData = async <T>(collection: string, docID: string): Promise<T | null> => {
  try {
    const docRef = doc(db, collection, docID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as T;
    }

    return null;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to retrieve document from ${collection} with ID ${docID}: ${error.message}`,
      );
    } else {
      throw new Error('An unknown error occurred while retrieving data.');
    }
  }
};
