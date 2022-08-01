import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [formData, setFomData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFomData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    console.log(formData);
  };

  const postData = async () => {
    const response = await axios
      .post("http://localhost:8080/users", formData)
      .then(() => navigate("/"));
    console.log(response);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-screen h-screen flex flex-col justify-center items-center gap-5"
      >
        <h2 className="text-center text-4xl text-primary ">Create</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={formData.name}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        <div className="gap-5 flex">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
          <button className="btn btn-ghost">Go Back</button>
        </div>
      </form>
    </>
  );
};

export default Create;
