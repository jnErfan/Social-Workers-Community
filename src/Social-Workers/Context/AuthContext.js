import React, { createContext } from "react";
import UseFirebase from "../Hooks/UseFirebase";

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const useAuth = UseFirebase();
  return (
    <AuthProvider.Provider value={useAuth}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
