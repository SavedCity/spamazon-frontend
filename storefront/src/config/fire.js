import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyARb8CCUmpCK2reoQWJzZWH6ly1j3adEfk",
  authDomain: "sp-a24ba.firebaseapp.com",
  projectId: "sp-a24ba",
  storageBucket: "sp-a24ba.appspot.com",
  messagingSenderId: "914422664124",
  appId: "1:914422664124:web:392360ae0f6e3e617bb9b9",
  measurementId: "G-ERM300KQ8S",
};

const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default fire;
