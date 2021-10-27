import FirebaseInitialize from "../Firebase/FirebaseInitialize";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInitialize();

const googleProvider = new GoogleAuthProvider();
const UseFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const googleLogin = () => {
    setError("");
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const adminLoginButton = () => {
    setError("");
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
  }, [auth]);
  return {
    user,
    error,
    isLoading,
    setUser,
    googleLogin,
    logOut,
    setEmail,
    setPassword,
    adminLoginButton,
  };
};

export default UseFirebase;
