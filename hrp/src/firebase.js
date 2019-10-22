import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeYiTiN1x2TtAjgixaYlIQzvRDTVnFjZ8",
    authDomain: "hrp-sivut.firebaseapp.com",
    databaseURL: "https://hrp-sivut.firebaseio.com/",
    projectId: "hrp-sivut",
    storageBucket: "hrp-sivut.appspot.com",
    messagingSenderId: "1081277527870",
    appId: "1:1081277527870:web:9e53f1c828c8017fdb1e6f",
    measurementId: "G-LYBMG18PLQ"
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };