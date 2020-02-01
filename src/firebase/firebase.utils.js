import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD8Q2KDR1KVp5ZsKkY47B2nEFcl3_4d8Uw",
    authDomain: "clothingdb-86872.firebaseapp.com",
    databaseURL: "https://clothingdb-86872.firebaseio.com",
    projectId: "clothingdb-86872",
    storageBucket: "clothingdb-86872.appspot.com",
    messagingSenderId: "519432660456",
    appId: "1:519432660456:web:f5aaedb5d3436bde2b705d",
    measurementId: "G-8LQ62EXRLP"
  };
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
