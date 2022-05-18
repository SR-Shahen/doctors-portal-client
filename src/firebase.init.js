// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyBzPZwTLlZh71-wxqinLA6oyndJeebVkTs",
    // authDomain: "doctors-portal-89b22.firebaseapp.com",
    // projectId: "doctors-portal-89b22",
    // storageBucket: "doctors-portal-89b22.appspot.com",
    // messagingSenderId: "817081272298",
    // appId: "1:817081272298:web:5930d9d4cec917704c1493"


    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};
// console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;