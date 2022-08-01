import axios from "axios";
import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    console.log("SUBMITTED VALUE: ", todo);
  };

  const postData = async () => {
    try {
      const response = await axios
        .post("http://localhost:8080/todos", {
          title: todo,
        })
        .then(() => fetchTodos());
      console.log(response);
    } catch (error) {
      console.log("ERRROR OCCURED: ", error);
    }
  };

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/todos");
    setTodos(response.data);
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then(() => fetchTodos());
  };

  return (
    <div className="w-screen h-screen bg-primary flex flex-col gap-10 justify-center items-center">
      <h1 className="font-bold text-4xl">TODOS</h1>
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-10">
        <input
          onChange={handleChange}
          className="input input-primary max-w-sm w-56 md:w-96"
          type="text"
          value={todo}
        />
        <button
          type="submit"
          className="btn btn-ghost btn-sm top-2 absolute right-2"
        >
          ADD
        </button>
      </form>

      <div>
        <TodoList deleteTodo={deleteTodo} todos={todos} />
      </div>
    </div>
  );
};

export default TodoPage;
