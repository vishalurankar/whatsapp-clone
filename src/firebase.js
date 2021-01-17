import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2KRUyyBNJs4MXlWbT1_NA1kjNhGrajck",
  authDomain: "whatsapp-clone-baf0b.firebaseapp.com",
  projectId: "whatsapp-clone-baf0b",
  storageBucket: "whatsapp-clone-baf0b.appspot.com",
  messagingSenderId: "21318808759",
  appId: "1:21318808759:web:0cf6700c14b331a0314932",
  measurementId: "G-9BSE4FCSRM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
