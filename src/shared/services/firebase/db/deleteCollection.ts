import { db } from '@config';
import { collection, deleteDoc, getDocs, query, where } from 'firebase/firestore';

export const deleteCollection = async ({ collectionPaths, docID }) => {
  try {
    const ref = collection(db, ...collectionPaths);
    const snapshot = await getDocs(ref);

    const deletePromises = [];

    for (const doc of snapshot.docs) {
      const boardsRef = collection(db, `${collectionPaths[0]}/${doc.id}/${collectionPaths[2]}`);
      const q = query(boardsRef, where('__name__', '==', docID));
      const boardsSnapshot = await getDocs(q);

      boardsSnapshot.forEach((docSnap) => {
        deletePromises.push(deleteDoc(docSnap.ref));
      });
    }

    await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error deleting collection:', error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
