import { db } from '@config';
import { collection, documentId, getDocs, query, where } from 'firebase/firestore';

export const getDocumentsByIds = async <T>(collectionName: string, ids: string[]): Promise<T[]> => {
  try {
    if (ids.length === 0) {
      return [];
    }

    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(documentId(), 'in', ids));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    const documents: T[] = [];

    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() } as T);
    });

    return documents;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    return [];
  }
};
