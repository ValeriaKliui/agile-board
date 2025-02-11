import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginForm = () => {
    const auth = getAuth();

    const onClick = () =>
        signInWithEmailAndPassword(auth, "email@gmail.com", "sdfsdf")
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error)
            });

    return <button onClick={onClick}>Login</button>;
}