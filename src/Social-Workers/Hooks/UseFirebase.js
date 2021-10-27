import FirebaseInitialize from "../Firebase/FirebaseInitialize";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";

FirebaseInitialize();

const googleProvider = new GoogleAuthProvider();
const UseFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    error,
    googleLogin,
  };
};

export default UseFirebase;
