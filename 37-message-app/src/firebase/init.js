import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMTCXqsVbXWRaMSKHt90xrQgd01k-2cXE',
  authDomain: 'vue-messenger-55.firebaseapp.com',
  databaseURL: 'https://vue-messenger-55.firebaseio.com',
  projectId: 'vue-messenger-55',
  storageBucket: 'vue-messenger-55.appspot.com',
  messagingSenderId: '794705129867',
  appId: '1:794705129867:web:7f60d2e08e3fdb49',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
