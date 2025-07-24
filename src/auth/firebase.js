// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJWey0SQVnMru0GssIZtjNg1v_MECb9FY",
    authDomain: "auth-ecommerce-v2.firebaseapp.com",
    projectId: "auth-ecommerce-v2",
    storageBucket: "auth-ecommerce-v2.firebasestorage.app",
    messagingSenderId: "766998166057",
    appId: "1:766998166057:web:12cfa9f847a9022d733a38",
    measurementId: "G-5RBZ3Q2RJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

export function crearUsuario(email, password) {
    return (
        new Promise((res, rej) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    res(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.message);
                    rej(error);
                });
        })
    )
}

export function loginEmailPass(email, password) {
    return (
        new Promise((res, rej) => {

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    res(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    rej(error);
                })

        })
    )
}
