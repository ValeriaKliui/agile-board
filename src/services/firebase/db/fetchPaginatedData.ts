import { collection, query, limit, getDocs, startAfter, where, orderBy } from 'firebase/firestore';
import { db } from '@config';
import { PAGE_SIZE } from '@constants/common';

export const fetchPaginatedData = async ({
  itemsAmount = PAGE_SIZE,
  dbName = '',
  lastVisibleDoc = null,
  searchTerm = '',
  searchKey = '',
}) => {
  let q = query(collection(db, dbName), limit(itemsAmount));

  let finalQuery = q;

  if (searchTerm) {
    q = query(
      q,
      where(searchKey, '>=', searchTerm),
      where(searchKey, '<=', searchTerm + '\uf8ff'),
      orderBy(searchKey),
    );
  }

  if (lastVisibleDoc) {
    finalQuery = query(q, startAfter(lastVisibleDoc));
  }

  const querySnapshot = await getDocs(finalQuery);

  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  return { documents, lastVisible };
};
