import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQjY6Hg-44Hp43l4u9ZrR9o6QkPXa8OTc",
  authDomain: "reeler-89abf.firebaseapp.com",
  projectId: "reeler-89abf",
  storageBucket: "reeler-89abf.appspot.com",
  messagingSenderId: "666808915967",
  appId: "1:666808915967:web:546df8ec88ffa09076b9ca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()