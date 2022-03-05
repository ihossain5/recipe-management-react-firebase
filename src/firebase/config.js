import firebase from "firebase/app";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClbnAuS_e_xT6JVllibcrN6w9mNFv2r4E",
    authDomain: "first-project-b145c.firebaseapp.com",
    projectId: "first-project-b145c",
    storageBucket: "first-project-b145c.appspot.com",
    messagingSenderId: "40146124510",
    appId: "1:40146124510:web:b74d5acdc8c5d7661bcc4f",
    measurementId: "G-L1VD8HFPQQ"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig)

  // initialize services
const projectFirestore = firebase.firestore()

export {projectFirestore}