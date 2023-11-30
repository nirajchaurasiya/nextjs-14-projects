"use client";
import { useContext } from "react";
import Login from "../components/Login";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
export default function page() {
  const allValues = useContext(AuthContext);
  const router = useRouter();
  if (!allValues) return;
  const { isAuthenticated } = allValues;
  const navigateToHome = () => {
    router.push("/");
  };
  return isAuthenticated ? <>{navigateToHome()}</> : <Login />;
}
