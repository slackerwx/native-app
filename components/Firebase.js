import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD2SDJQNnNr90qNr_HJxV3j0bYqDGqaIRM",
  authDomain: "react-native-skelethon.firebaseapp.com",
  databaseURL: "https://react-native-skelethon.firebaseio.com",
  storageBucket: "react-native-skelethon.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
