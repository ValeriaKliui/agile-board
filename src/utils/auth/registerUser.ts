import { db } from "@config/firebase";
import { handleAuthError } from "@utils/auth/handleAuthError";
import {
  AuthUserReturns,
  REGISTER_ERRORS,
  REGISTER_ERRORS_MESSAGES,
  RegisterUserProps,
} from "@utils/auth/interfaces";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const createUserAccount = async ({ uid, email, username }: User) => {
  try {
    if (uid) {
      await setDoc(doc(db, "Users", uid), {
        email,
        username,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async ({
  email,
  password,
  auth,
  username,
}: RegisterUserProps): Promise<AuthUserReturns> => {
  try {
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(auth, email, password);

    await createUserAccount({ uid, username, email });

    return { result: "success" };
  } catch (error) {
    return handleAuthError(error, REGISTER_ERRORS, REGISTER_ERRORS_MESSAGES);
  }
};
