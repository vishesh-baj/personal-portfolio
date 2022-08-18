import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import TodoContext from "../context/TodoContext";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";

const TodoPage = () => {
  const { handleChange, handleDelete, handleSubmit, currentTodo, todoList } =
    useContext(TodoContext);
  console.log(todoList);
  return (
    <Navbar>
      <div className="w-screen h-screen flex  flex-col items-center gap-5 justify-center container py-5">
        <div className="py-2 flex flex-col gap-4 items-center">
          <h1 className="font-bold text-3xl">TODO UTILITY</h1>
          <div className="relative">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="todo"
                className="input input-primary "
                placeholder="Add a todo"
                value={currentTodo}
                onChange={handleChange}
              />
              <button type="submit">
                <IoAddCircleOutline className=" text-xl absolute right-4 top-[15px] animate-spin" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {todoList.map((todoItem, idx) => (
              <div className="card w-96 bg-base-100 shadow-xl hover:bg-base-200">
                <div className="card-body ">
                  <div className="flex justify-between items-center">
                    <h1 className="text-secondary uppercase font-semibold">
                      {todoItem}
                    </h1>
                    <AiFillCheckCircle
                      onClick={() => handleDelete(idx)}
                      className="text-lime-400 cursor-pointer"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default TodoPage;
