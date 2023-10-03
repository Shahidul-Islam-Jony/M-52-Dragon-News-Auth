// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhNETWI_NJBlhcimVIP1LOrIK4KczerkE",
    authDomain: "m52-dragon-news-auth.firebaseapp.com",
    projectId: "m52-dragon-news-auth",
    storageBucket: "m52-dragon-news-auth.appspot.com",
    messagingSenderId: "891110047466",
    appId: "1:891110047466:web:98aa837f61e0863fd0a193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;