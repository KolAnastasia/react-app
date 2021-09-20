import firebase from "firebase/compat/app";
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyB-R1u4cVkyg3Oe1BbFgHPjHFG40vlegrI",
  authDomain: "pokemon-4885d.firebaseapp.com",
  databaseURL: "https://pokemon-4885d-default-rtdb.firebaseio.com",
  projectId: "pokemon-4885d",
  storageBucket: "pokemon-4885d.appspot.com",
  messagingSenderId: "402464015112",
  appId: "1:402464015112:web:0bda8a01b9bec1c20e62bd"
};


firebase.initializeApp(firebaseConfig);

export const fire = firebase; 


export const database = firebase.database();

export default database;