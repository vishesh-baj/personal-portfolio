import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
const TodoItem = ({ id, title, deleteTodo }) => {
  return (
    <div className="flex rounded-full justify-between gap-10 px-4 py-2 bg-secondary">
      <h1>{title}</h1>
      <div className="flex gap-2">
        <AiOutlineEdit className="text-primary cursor-pointer" size={20} />
        <AiOutlineDelete
          onClick={() => {
            deleteTodo(id);
          }}
          className="text-rose-200 cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
};
export default TodoItem;
