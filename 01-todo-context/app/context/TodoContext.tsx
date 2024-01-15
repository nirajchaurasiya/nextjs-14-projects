"use client";
import axios from "axios";
import { AxiosDataType, TodoContextType, Todos } from "../lib/definitions";
import React from "react";

export const TodoContext = React.createContext<TodoContextType | null>(null);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todo, setTodo] = React.useState<Todos[]>([]);

  React.useEffect(() => {
    async function fetchAllTodo() {
      await axios
        .get("/api/getTodo")
        .then((data: AxiosDataType) => {
          setTodo(data.data.getAllTodo);
        })
        .catch((err) => {
          alert("Failed to connect to SERVER!");
        });
    }
    fetchAllTodo();
  }, []);

  const addTodo = (todo: Todos) => {
    setTodo((prevTodo) => [...prevTodo, todo]);
  };

  const removeTodo = (id: string) => {
    axios
      .delete(`/api/removeTodo/${id}`)
      .then((data) => {
        if (data.data.status === 1) setTodo(data.data.allTodo);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  async function editTodo(id: string, title: string, desc: string) {
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
