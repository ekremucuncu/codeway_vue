import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './initialize';


export function signup(email, password) {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log('user', user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage
        });
}


export function signin(email, password) {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user', user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage
        });
}