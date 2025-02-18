import { db } from '@config/firebase';
import { UpdateDataType } from '@utils/firebase/db/interfaces';
import { arrayUnion, arrayRemove, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

export const updateDataArray = async <T>(
  dbName: string,
  key: string,
  field: string,
  value: T,
  action: UpdateDataType,
) => {
  try {
    const ref = doc(db, dbName, key);
    const docSnap = await getDoc(ref);

    if (!docSnap.exists()) {
      if (action === 'add' || action === 'set') {
        await setDoc(
          ref,
          { [field]: action === 'add' ? arrayUnion(value) : value },
          { merge: true },
        );
      } else {
        console.warn(`Document ${key} does not exist in ${dbName}`);
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
    throw new Error(error.message);
  }
};
