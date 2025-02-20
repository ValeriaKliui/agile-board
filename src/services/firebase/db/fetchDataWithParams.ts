import { db } from '@config';
import { ITEMS_PER_PAGE } from '@constants';
import { collection, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';

export const fetchDataWithParams = async <T>({
  itemsAmount = ITEMS_PER_PAGE,
  dbName = '',
  lastVisibleDoc = null,
  searchTerm = '',
  searchKey = '',
}) => {
  try {
    let finalQuery = query(collection(db, dbName), limit(itemsAmount));

    if (searchTerm) {
      finalQuery = query(
        finalQuery,
        where(searchKey, '>=', searchTerm),
        where(searchKey, '<=', searchTerm + '\uf8ff'),
        orderBy(searchKey),
      );
    }

    if (lastVisibleDoc) {
      finalQuery = query(finalQuery, startAfter(lastVisibleDoc));
    }

    const querySnapshot = await getDocs(finalQuery);
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as T[];

    const lastVisible =
      querySnapshot.docs.length > 0 ? querySnapshot.docs[querySnapshot.docs.length - 1] : null;

    return { documents, lastVisible, status: 'success' };
  } catch (error) {
    console.error('Ошибка запроса к Firestore:', error);
    return { status: 'error', documents: [], lastVisible: null };
  }
};
