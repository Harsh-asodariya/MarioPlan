import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBqjoSv73TEuPbR2yFuY8E2Uxhp_mKze98",
  authDomain: "marioplan-e5239.firebaseapp.com",
  projectId: "marioplan-e5239",
  storageBucket: "marioplan-e5239.appspot.com",
  messagingSenderId: "1082506925127",
  appId: "1:1082506925127:web:667b356d7b356d38880d62"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true })

export default firebase;