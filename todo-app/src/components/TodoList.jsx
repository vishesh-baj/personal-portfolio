import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="flex flex-col gap-3">
      {todos.map(({ id, title }) => (
        <TodoItem deleteTodo={deleteTodo} key={id} title={title} id={id} />
      ))}
    </div>
  );
};
export default TodoList;
