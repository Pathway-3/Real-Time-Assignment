// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC853xH2hwmwd-i6gdzAdBMzoRYxEvN5e4",
  authDomain: "real-time-5684f.firebaseapp.com",
  projectId: "real-time-5684f",
  storageBucket: "real-time-5684f.appspot.com",
  messagingSenderId: "612186264362",
  appId: "1:612186264362:web:0771d6d4022ff44b24c453",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// the below code fragment can be found in: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9
