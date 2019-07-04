import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "***************",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************",
    appId: "***************"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;