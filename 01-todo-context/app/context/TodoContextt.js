"use client";
import { createContext, useState } from "react";
const todoDefinitions = [];
export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState(todoDefinitions);

  const addTodo = (todo) => {
    setTodo((prevTodo) => [...prevTodo, todo]);
    console.log(todo);
    console.log(JSON.stringify(todo));
    localStorage.setItem("allTodoItem", JSON.stringify(todo));
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((e) => e.id !== id));
    localStorage.setItem("allTodoItem", JSON.stringify(todo));
  };
  function editTodo(id, title, desc) {
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
    localStorage.setItem("allTodoItem", JSON.stringify(todo));
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
