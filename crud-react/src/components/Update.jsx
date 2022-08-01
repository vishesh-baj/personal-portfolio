import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    console.log(id, name, email);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/users/${id}`, {
        name,
        email,
      })
      .then(() => {
        localStorage.clear();
        navigate("/");
        1;
      });
  };
  return (
    <>
      <Link to="/" className="btn btn-ghost">
        Go Back
      </Link>
      <form
        onSubmit={(e) => handleUpdate(e)}
        className="w-screen h-screen flex flex-col justify-center items-center gap-5"
      >
        <h2 className="text-center text-4xl text-primary ">Update</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
