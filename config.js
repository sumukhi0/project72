import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyAGxJDDHyphBYQzMBxp2fnnInRW1LasdZA",
  authDomain: "project71-9045d.firebaseapp.com",
  projectId: "project71-9045d",
  storageBucket: "project71-9045d.appspot.com",
  messagingSenderId: "773785431934",
  appId: "1:773785431934:web:cbb710f699d07b67f50d2f"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

