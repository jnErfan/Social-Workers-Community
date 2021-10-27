import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfiq";

const FirebaseInitialize = () => {
  return initializeApp(firebaseConfig);
};

export default FirebaseInitialize;
