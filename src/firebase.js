import firebase from "firebase"

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBZ0SR02FzH49G0RHg4zP0Gdi1o492mIq8",
    authDomain: "todo-app-boxter.firebaseapp.com",
    projectId: "todo-app-boxter",
    storageBucket: "todo-app-boxter.appspot.com",
    messagingSenderId: "229223158930",
    appId: "1:229223158930:web:df4edc9e83744882ee024b",
    measurementId: "G-XNHBZVN9L8"
});

const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db, auth, storage};