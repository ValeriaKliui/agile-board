import { db } from '@config';
import { doc, getDoc } from 'firebase/firestore';

export const getData = async <T>(dbName: string, key: string): Promise<T | undefined> => {
  try {
    const docRef = doc(db, dbName, key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as T;
    }

    return undefined;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to retrieve document from ${dbName} with ID ${key}: ${error.message}`,
      );
    } else {
      throw new Error('An unknown error occurred while retrieving data.');
    }
  }
};
