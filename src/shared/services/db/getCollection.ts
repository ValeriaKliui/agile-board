import { db } from '@config';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { CollectionWithParams, DataWithId } from './types';

export const getCollection = async <T>({
  itemsAmount,
  collectionPaths,
  searchTerm,
  searchKey,
  filterKey,
  filterValues,
}: CollectionWithParams) => {
  try {
    let q = query(collection(db, ...collectionPaths));

    if (itemsAmount) {
      query(q, limit(itemsAmount));
    }

    if (searchTerm && searchKey) {
      q = query(
        q,
        where(searchKey, '>=', searchTerm),
        where(searchKey, '<=', searchTerm + '\uf8ff'),
      );
    }

    if (filterKey && filterValues) {
      q = query(q, where(filterKey, 'not-in', filterValues));
    }

    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as DataWithId<T>[];

    return documents;
  } catch (error) {
    console.error('Error Firestore:', error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
