import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUlcIf2c0uOGIW9SLYtFkV9YD9iPj_HqU",
  authDomain: "ninja-smoothies-55.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-55.firebaseio.com",
  projectId: "ninja-smoothies-55",
  storageBucket: "ninja-smoothies-55.appspot.com",
  messagingSenderId: "669472155511",
  appId: "1:669472155511:web:0d930964ce93cafb"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// export firestore database
export default firebaseApp.firestore();
