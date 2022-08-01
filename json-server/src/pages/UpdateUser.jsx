import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    setId(localStorage.getItem("id"));
  }, []);

  const updateUser = async (id) => {
    const response = await axios.put(`http://localhost:8080/users/${id}`, {
      id,
      username,
      email,
    });
    console.log(response);
    navigate("/dashboard");
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content">
        <div className="w-full md:w-96 h-96 p-10 bg-secondary shadow-xl rounded-lg flex flex-col  gap-2">
          <h2 className="text-4xl font-bold">Update</h2>
          <div className="form-control w-full">
            <label htmlFor="username" className="label">
              User Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="password" className="label">
              Email
            </label>
            <input
              id="password"
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            onClick={() => updateUser(id)}
            className="btn btn-primary w-48 mt-2"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
