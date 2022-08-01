import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  const [signupObj, setSignupObj] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerUser = async () => {
    await axios
      .post("http://localhost:8080/users", signupObj)
      .then(() => navigate("/dashboard"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  const handleChange = (e) => {
    setSignupObj({ ...signupObj, [e.target.name]: e.target.value });
    console.log(signupObj);
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content">
        <div className="w-full md:w-96 h-auto p-10 bg-secondary shadow-xl rounded-lg flex flex-col  gap-2">
          <h2 className="text-4xl font-bold">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label htmlFor="username" className="label">
                User Name
              </label>
              <input
                onChange={handleChange}
                name="username"
                type="text"
                className="input w-full max-w-xs"
                id="username"
                value={signupObj.username}
                placeholder="ex- John Doe"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                className="input w-full max-w-xs"
                id="email"
                value={signupObj.email}
                placeholder="ex- johndoe@example.com"
              />
              <p className="text-error">
                {signupObj.email.length < 8 && signupObj.email.length > 0
                  ? "Enter valid Email"
                  : ""}
              </p>
            </div>

            <div className="form-control w-full">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                id="password"
                type="password"
                className="input w-full max-w-xs"
                value={signupObj.password}
                placeholder="must be atleast 6 characters"
              />
              <p className="text-error">
                {signupObj.password.length < 6 && signupObj.password.length > 0
                  ? "Password must be atleast 6 characters long"
                  : ""}
              </p>
            </div>
            <button type="submit" className={`btn btn-primary w-48 mt-3`}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
