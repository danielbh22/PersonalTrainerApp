import firebase from 'firebase/app';
import 'firebase/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyAlqsNveRDjHWyandvXMI7bAXSsTck170k",
    authDomain: "personaltrainerapp-1c1f9.firebaseapp.com",
    projectId: "personaltrainerapp-1c1f9",
    storageBucket: "personaltrainerapp-1c1f9.appspot.com",
    messagingSenderId: "265564743947",
    appId: "1:265564743947:web:21e65c79d5580e9bb49a0e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;
