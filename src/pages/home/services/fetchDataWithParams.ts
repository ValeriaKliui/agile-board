import { db } from '@config';
import { ITEMS_PER_PAGE } from '@constants';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

export const fetchDataWithParams = async <T>({
  itemsAmount = ITEMS_PER_PAGE,
  collectionName = '',
  searchTerm = '',
  searchKey = '',
}) => {
  try {
    let q = query(collection(db, collectionName), limit(itemsAmount));

    if (searchTerm) {
      q = query(
        q,
        where(searchKey, '>=', searchTerm),
        where(searchKey, '<=', searchTerm + '\uf8ff'),
        orderBy(searchKey),
      );
    }

    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[];

    const lastVisible =
      querySnapshot.docs.length > 0 ? querySnapshot.docs[querySnapshot.docs.length - 1] : null;

    return { documents, lastVisible, status: 'success' };
  } catch (error) {
    console.error('Error Firestore:', error);
    return { status: 'error', documents: [], lastVisible: null };
  }
};
