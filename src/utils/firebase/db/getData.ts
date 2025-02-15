import { db } from "@config/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getData = async <T>(dbName, key) => {
  try {
    const docRef = doc(db, dbName, key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data() as T;
  } catch (error) {
    throw new Error(error);
  }
};
