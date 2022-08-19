import React, { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
    console.log(currentTodo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevState) => [...prevState, currentTodo]);
    setCurrentTodo("");
    console.log(todoList);
  };
  // ? handleDelete to delete the todo
  const handleDelete = (idx) => {
    setTodoList(todoList.filter((_todoItem, id) => id !== idx));
  };

  return (
    <TodoContext.Provider
      value={{
        handleChange,
        handleSubmit,
        handleDelete,
        currentTodo,
        todoList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
