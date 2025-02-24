import { db } from '@config';
import { collection, getDocs } from 'firebase/firestore';
import { DataWithId } from 'services/firebase/db/types';

export const getCollection = async <T>(path: readonly [string, ...string[]]) => {
  try {
    const collectionRef = collection(db, ...path);

    const querySnapshot = await getDocs(collectionRef);

    const data: DataWithId<T>[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      data.push({ id: doc.id, ...docData } as DataWithId<T>);
    });

    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
