import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyAub6fFgNi4UT649Iq8jOi8JQ_TEOl_9Kc",
    authDomain: "e-ride-f8dbd.firebaseapp.com",
    projectId: "e-ride-f8dbd",
    storageBucket: "e-ride-f8dbd.appspot.com",
    messagingSenderId: "983371726661",
    appId: "1:983371726661:web:a2dd4794b4e5dab6d0882c"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
