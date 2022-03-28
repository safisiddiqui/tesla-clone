import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd4epH1C_FcMjFWJI1O9et3es3DLZWaSw",
  authDomain: "tesla-clone-5ac83.firebaseapp.com",
  projectId: "tesla-clone-5ac83",
  storageBucket: "tesla-clone-5ac83.appspot.com",
  messagingSenderId: "206603331463",
  appId: "1:206603331463:web:10a1dd938e0bfea0ee1522",
  measurementId: "G-ZKKD5CHNE0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
