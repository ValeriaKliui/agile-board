import { db } from '@config';
import { addDoc, collection, doc, DocumentData, setDoc, WithFieldValue } from 'firebase/firestore';

import { SetDataParams } from './types';

export const setData = async <T extends WithFieldValue<DocumentData>>(
  {
    docID, data,collectionPaths
  }:SetDataParams<T>
) => {
  try {
    let id = docID;
    
    if (docID) await setDoc(doc(db, ...collectionPaths, docID), data);
    else {
      const docRef = await addDoc(collection(db, ...collectionPaths), data);
      id = docRef.id;
    }

    if (!id) throw new Error('Doc wasn`t created');

    return id;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Failed to create document in ${collectionPaths.toString()} with ID ${docID}: ${error.message}`,
      );
  }
};
