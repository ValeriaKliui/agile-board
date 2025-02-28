import { db } from '@config';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { CollectionWithParams, DataWithId } from './types';

export const getCollection = async<T>({
  itemsAmount, 
  collectionPaths,
  searchTerm,
  searchKey
}:CollectionWithParams) =>{
  try {
    let q = query(collection(db, ...collectionPaths));

    if (itemsAmount ){
      query(q, limit(itemsAmount))
    }

    if (searchTerm && searchKey) {
      q = query(
        q,
        where(searchKey, '>=', searchTerm),
        where(searchKey, '<=', searchTerm + '\uf8ff'),
        orderBy(searchKey),
      );
    }

    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as DataWithId<T>[];

    return documents;
  } catch (error) {
    console.error('Error Firestore:', error);
   if (error instanceof Error)  throw new Error(error.message)
  }
};
