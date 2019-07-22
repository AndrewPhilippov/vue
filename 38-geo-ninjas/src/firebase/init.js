import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCFoXnXxOpu62lNhQM0N_-3TSVYQxY_hzo",
  authDomain: "ge-ninjas-55.firebaseapp.com",
  databaseURL: "https://ge-ninjas-55.firebaseio.com",
  projectId: "ge-ninjas-55",
  storageBucket: "",
  messagingSenderId: "986681400935",
  appId: "1:986681400935:web:ed0371f343cbc174"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
