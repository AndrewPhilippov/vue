import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyChf6g0700euqsrcKvQ_zj24sDEyjbOEcQ',
  authDomain: 'vue-message-app-55.firebaseapp.com',
  databaseURL: 'https://vue-message-app-55.firebaseio.com',
  projectId: 'vue-message-app-55',
  storageBucket: 'vue-message-app-55.appspot.com',
  messagingSenderId: '488621794850',
  appId: '1:488621794850:web:d8b144ed17b8faae',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
