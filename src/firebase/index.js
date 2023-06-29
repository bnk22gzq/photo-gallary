// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVWtDnnoNfIiUrTa2KgUzlbayOoyj-g6A",
  authDomain: "photogallary-firebase.firebaseapp.com",
  databaseURL:"gs://photogallary-firebase.appspot.com",
  projectId: "photogallary-firebase",
  storageBucket: "photogallary-firebase.appspot.com",
  messagingSenderId: "213078595222",
  appId: "1:213078595222:web:c9be878a542c6881d354b7",
  measurementId: "G-1286FGQSKZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

