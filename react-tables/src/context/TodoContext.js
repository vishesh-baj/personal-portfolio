import { createContext } from "react";

const TodoContext = createContext();

export const TodoContextProvider = () => {
  const title = "TODO APP";

  return <TodoContext.Provider value={title}></TodoContext.Provider>;
};

export default TodoContext;
