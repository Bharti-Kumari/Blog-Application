// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAkNxQQG3yoyvDyomnVKhcNYIP4Rf2PcI",
  authDomain: "bolg-using-react-hooks.firebaseapp.com",
  projectId: "bolg-using-react-hooks",
  storageBucket: "bolg-using-react-hooks.appspot.com",
  messagingSenderId: "416094573689",
  appId: "1:416094573689:web:c0978170bc95c65bcc30a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initallize CLoud Firestore and get a reference to the service
export const db = getFirestore(app);
