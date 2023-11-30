"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Register from "../components/Register";
import { useRouter } from "next/navigation";

export default function page() {
  const allValues = useContext(AuthContext);
  const router = useRouter();
  if (!allValues) return;
  const { isAuthenticated } = allValues;
  const navigateToHome = () => {
    router.push("/");
  };
  return isAuthenticated ? <>{navigateToHome()}</> : <Register />;
}
