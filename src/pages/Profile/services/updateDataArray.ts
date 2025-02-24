import { db } from '@config';
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { UpdateDataType } from './types';

export const updateDataArray = async <T>(
  collection: string,
  docID: string,
  field: string,
  value: T,
  action: UpdateDataType,
) => {
  try {
    const ref = doc(db, collection, docID);
    const docSnap = await getDoc(ref);

    if (!docSnap.exists()) {
      if (action === 'add' || action === 'set') {
        await setDoc(
          ref,
          { [field]: action === 'add' ? arrayUnion(value) : value },
          { merge: true },
        );
      } else {
        console.warn(`Document ${docID} does not exist in ${collection}`);
      }
      return;
    }

    switch (action) {
      case 'add':
        await updateDoc(ref, { [field]: arrayUnion(value) });
        break;
      case 'remove':
        await updateDoc(ref, { [field]: arrayRemove(value) });
        break;
      case 'set':
        await updateDoc(ref, { [field]: value });
        break;
      default:
        throw new Error('Invalid action type');
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
