import { db } from '@config';
import { DataParams } from '@shared/services';
import { doc, DocumentData, updateDoc, WithFieldValue } from 'firebase/firestore';

export const updateData = async <T extends WithFieldValue<DocumentData>>({
  collectionPaths,
  data,
}: DataParams<T>) => {
  try {
    const docRef = doc(db, ...collectionPaths);

    await updateDoc(docRef, data);
  } catch (error) {
    console.error(error);
    if (error instanceof Error)
      throw new Error(
        `Failed to update document in ${collectionPaths.toString()}: ${error.message}`,
      );
  }
};
