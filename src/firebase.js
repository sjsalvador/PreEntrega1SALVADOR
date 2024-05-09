import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_XLB0w4Gqi9_JbQe4JsGb7TIDLCXijsI",
  authDomain: "react-coder-sjs.firebaseapp.com",
  projectId: "react-coder-sjs",
  storageBucket: "react-coder-sjs.appspot.com",
  messagingSenderId: "733490241084",
  appId: "1:733490241084:web:825c0c437aad2a75a7ed39"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
