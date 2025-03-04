import { db } from '@config';
import { MoveTocumentParams, setData } from '@shared/services';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';

export const moveDocument = async ({
  collectionPaths,
  targetCollectionPaths,
  docID,
}: MoveTocumentParams) => {
  try {
    const sourceDocRef = doc(db, ...collectionPaths);

    const docSnap = await getDoc(sourceDocRef);

    if (docSnap.exists()) {
      const docData = docSnap.data();

      await setData({
        collectionPaths: targetCollectionPaths,
        docID: docID,
        data: docData,
      });

      await deleteDoc(sourceDocRef);
    }
  } catch (error) {
    console.error('Error while moving element: ', error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
