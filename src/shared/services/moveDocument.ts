import { db } from '@config';
import { MoveDocumentParams, setData } from '@shared/services';
import { deleteDoc, doc, DocumentData, WithFieldValue } from 'firebase/firestore';

export const moveDocument = async <T extends WithFieldValue<DocumentData>>({
  collectionPaths,
  targetCollectionPaths,
  docID,
  docData,
}: MoveDocumentParams<T>) => {
  try {
    const sourceDocRef = doc(db, ...collectionPaths);

    await setData({
      collectionPaths: targetCollectionPaths,
      docID,
      data: docData,
    });

    await deleteDoc(sourceDocRef);
  } catch (error) {
    console.error('Error while moving element: ', error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
