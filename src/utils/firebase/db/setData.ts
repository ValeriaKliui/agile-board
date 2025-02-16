import { db } from "@config/firebase";
import { doc, DocumentData, setDoc, WithFieldValue } from "firebase/firestore";

export const setData = async <T extends WithFieldValue<DocumentData>>(
  dbName: string,
  key: string,
  data: T,
) => {
  try {
    await setDoc(doc(db, dbName, key), data);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
