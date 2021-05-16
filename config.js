import firebase from 'firebase';
require ('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyB2o_pQzJ9VQRy6acbMSSiMqwHu_SRKSx8",
    authDomain: "booksantaapp-ef1e5.firebaseapp.com",
    projectId: "booksantaapp-ef1e5",
    databaseURL:'https://book-santa.firebaseio.com/',
    storageBucket: "booksantaapp-ef1e5.appspot.com",
    messagingSenderId: "541595729098",
    appId: "1:541595729098:web:c8b860ff435040a967c833"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();