import { auth, db } from "@config/firebase";
import { handleAuthError } from "@utils/auth/handleAuthError";
import {
  AuthUserProps,
  AuthUserReturns,
  REGISTER_ERRORS,
  REGISTER_ERRORS_MESSAGES,
} from "@utils/auth/interfaces";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const createUserAccount = async ({ uid, email }: User) => {
  try {
    if (uid) {
      await setDoc(doc(db, "Users", uid), {
        email,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async ({
  email,
  password,
}: AuthUserProps): Promise<AuthUserReturns> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await createUserAccount(userCredential.user);
    await auth.signOut();

    return { result: "success" };
  } catch (error) {
    return handleAuthError(error, REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES);
  }
};
