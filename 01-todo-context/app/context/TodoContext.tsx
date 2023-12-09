"use client";
import { Todos } from "../lib/definitions";
import React from "react";

type TodoContextType = {
  todo: Array<Todos>;
  setTodo: React.Dispatch<React.SetStateAction<Array<Todos>>>;
  removeTodo: (id: number) => void;
  editTodo: (id: number, title: string, desc: string) => void;
  addTodo: (todo: Todos) => void;
};

export const TodoContext = React.createContext<TodoContextType | undefined>(
  undefined
);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todo, setTodo] = React.useState<Todos[]>([]);
  const addTodo = (todo: Todos) => {
    setTodo((prevTodo) => [...prevTodo, todo]);
  };

  const removeTodo = (id: number) => {
    setTodo((prevTodo) => prevTodo.filter((e) => e.id !== id));
  };
  function editTodo(id: number, title: string, desc: string) {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // Update the 'title' property for the matching 'id'
          return { ...todo, title: title, desc: desc };
        }
        // For other elements, return them unchanged
        return todo;
      });
    });
  }
  const allValues = {
    todo,
    setTodo,
    addTodo,
    removeTodo,
    editTodo,
  };
  return (
    <TodoContext.Provider value={allValues}>{children}</TodoContext.Provider>
  );
}
