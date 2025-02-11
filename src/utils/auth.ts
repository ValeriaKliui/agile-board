import { createUserWithEmailAndPassword } from 'firebase/auth';
import { RegisterUserProps } from '../types/utils';

export const registerUser = ({
  auth,
  email,
  password,
}: RegisterUserProps) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
