"use client";
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todos } from "../lib/definitions";
import { useRouter } from "next/navigation";
export default function AllTodo() {
  const router = useRouter();
  const contextValue = useContext(TodoContext);

  if (!contextValue) {
    // Handle the case when context value is not available
    return null;
  }

  const { todo, removeTodo } = contextValue;
  const handleEditTodo = (id: string) => {
    router.push(`/edit/${id}`);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 md:py-6 py-6 mx-auto">
        <p className="mb-3 text-gray-300 text-lg font-extrabold">
          All Todos ({todo.length})
        </p>
        <div className="flex flex-wrap -m-4">
          {todo.map((e: Todos, index: number) => (
            <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="h-full border border-gray-700 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {e.title}
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-400">{e.desc}</p>
                  <p className="border-t border-t-gray-900 mb-3"></p>
                  <p className="leading-relaxed text-gray-400 mb-3">
                    Created At: {e.date}
                  </p>
                  <p className="border-t border-t-gray-900 mb-3"></p>
                  <p className="leading-relaxed text-gray-400 mb-3 text-sm">
                    ID: {e.id}
                  </p>
                  <p className="border-t border-t-gray-900 mb-4"></p>

                  <div className="flex items-center justify-between flex-wrap ">
                    <button
                      onClick={() => {
                        removeTodo(e.id);
                      }}
                      className="text-white bg-orange-700 p-1 rounded inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        handleEditTodo(e.id);
                      }}
                      className="text-white pr-4 pl-4 text-center bg-blue-700 p-1 rounded inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
