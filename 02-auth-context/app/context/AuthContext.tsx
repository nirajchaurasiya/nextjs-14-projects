"use client";
import React, { useState } from "react";
import { User } from "../lib/UserType";
type AuthContextType = {
  allUser: Array<User>;
  setAllUser: React.Dispatch<React.SetStateAction<Array<User>>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser: (email: string, password: string) => true | false | undefined;
  registerUser: (
    email: string,
    password: string,
    name: string
  ) => true | false | undefined;
  logout: () => void;
  authenticatedUser: User | null;
  setAuthenticatedUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allUser, setAllUser] = useState<User[]>([
    {
      email: "test@gmail.com",
      password: "12345",
      name: "Test",
    },
  ]);
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function loginUser(email: string, password: string) {
    const findUser = allUser.find((e) => e.email === email);

    if (findUser && findUser.password === password) {
      setIsAuthenticated(!isAuthenticated);
      setAuthenticatedUser(findUser); // <-- Now it correctly sets the user object
      return true;
    } else return false;
  }

  function registerUser(email: string, password: string, name: string) {
    const findUser = allUser.find((e) => e.email === email);
    if (findUser) return false;
    if (!findUser) {
      setAllUser((prevUsers) => [
        ...prevUsers,
        { email: email, password: password, name: name },
      ]);
      return true;
    }
  }
  function logout() {
    setIsAuthenticated(!isAuthenticated);
  }
  const allValues = {
    allUser,
    setAllUser,
    isAuthenticated,
    setIsAuthenticated,
    loginUser,
    registerUser,
    logout,
    authenticatedUser,
    setAuthenticatedUser,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
}
