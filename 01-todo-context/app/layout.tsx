import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import TodoContextProvider from "./context/TodoContext";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoList",
  description: "Create todo list using useContext",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " w-full md:w-2/3 m-auto"}
        suppressHydrationWarning={true}
      >
        <TodoContextProvider>
          <Navbar />
          {children}
        </TodoContextProvider>
      </body>
    </html>
  );
}
