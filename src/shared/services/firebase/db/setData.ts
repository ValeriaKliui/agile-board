import { db } from '@config';
import { addDoc, collection, doc, DocumentData, setDoc, WithFieldValue } from 'firebase/firestore';

export const setData = async <T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  docID: string | null,
  data: T,
) => {
  try {
    let id = docID;
    if (docID) await setDoc(doc(db, collectionName, docID), data);
    else {
      const docRef = await addDoc(collection(db, collectionName), data);
      id = docRef.id;
    }

    if (!id) throw new Error();

    return id;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Failed to create document in ${collectionName} with ID ${docID}: ${error.message}`,
      );
  }
};
