import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function Login() {
  const onClick = () =>
    signInWithEmailAndPassword(auth, "email@gmail.com", "sdfsdf")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch(() => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  return <button onClick={onClick}>Login</button>;
}
