// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
    apiKey: "AIzaSyCGk-MItPmcYI-I_u1LP4yrwSLtOIO0jCI",
    authDomain: "codeway-97f96.firebaseapp.com",
    projectId: "codeway-97f96",
    storageBucket: "codeway-97f96.appspot.com",
    messagingSenderId: "867849637645",
    appId: "1:867849637645:web:bc3a9faea404c08b99ea44"
    };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export function signup(email, password){
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


export function signin(email, password){
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
