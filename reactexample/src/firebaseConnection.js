import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCYCXoskyJDrhAhbDHcKLLP1-19pjDwMfo",
    authDomain: "reactapp-c1510.firebaseapp.com",
    databaseURL: "https://reactapp-c1510.firebaseio.com",
    projectId: "reactapp-c1510",
    storageBucket: "reactapp-c1510.appspot.com",
    messagingSenderId: "144752436900",
    appId: "1:144752436900:web:2f36f7f6e5e47ce6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;