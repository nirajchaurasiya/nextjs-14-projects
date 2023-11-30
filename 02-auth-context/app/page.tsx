"use client";
import Link from "next/link";
import React from "react";
import { AuthContext } from "./context/AuthContext";

export default function Home() {
  const loginContext = React.useContext(AuthContext);

  if (!loginContext) return;

  const { isAuthenticated, logout, authenticatedUser } = loginContext;
  return (
    <main className="flex flex-col items-center justify-between lg:pt-20 pt-10 p-0 md:p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] md:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {isAuthenticated ? (
          <div className="flex gap-1">
            Welcome{","}
            <span className="font-extrabold text-lg text-red-300">
              {authenticatedUser?.name}
            </span>
          </div>
        ) : (
          "You are not authenticated!"
        )}
      </div>
      {isAuthenticated ? (
        <div
          onClick={() => {
            logout();
          }}
          className="cursor-pointer text-red-300 font-extrabold py-2 text-xl"
        >
          Logout
        </div>
      ) : (
        <>
          <Link
            href="/login"
            className="text-red-300 font-extrabold py-2 text-xl"
          >
            Login
          </Link>
          <div className="font-extrabold py-2 text-xl text-center">
            <p className="text-red-300 ">For testing:</p>
            <p>Email: test@gmail.com</p>
            <p>Password: 12345</p>
          </div>
        </>
      )}
    </main>
  );
}
