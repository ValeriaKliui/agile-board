import { db } from '@config';
import { collection, getDocs } from 'firebase/firestore';

export const getCollection = async <T>(path: string[]) => {
  try {
    const collectionRef = collection(db, ...path);

    const querySnapshot = await getDocs(collectionRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return (data as T[]) ?? [];
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
