import { getFirestore } from "firebase/firestore"
// import{
//     envapiKey,
//     envauthDomain,
//     envprojectId,
//     envstorageBucket,
//     envmessagingSenderId,
//     envappId
// } from "react-native-dotenv";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKbVc0pgAYH0J9W4Pb9l_HA5KHQBGxB0g",
  authDomain: "cs5520-6074c.firebaseapp.com",
  projectId: "cs5520-6074c",
  storageBucket: "cs5520-6074c.appspot.com",
  messagingSenderId: "455102742614",
  appId: "1:455102742614:web:a8e4929dedd5d4266bbbf7"
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
export const database = getFirestore(myApp)
