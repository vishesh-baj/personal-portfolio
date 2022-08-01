import React from "react";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content">
        <div className="w-full md:w-96 h-96 p-10 bg-secondary shadow-xl rounded-lg flex flex-col  gap-2">
          <h2 className="text-4xl font-bold">Login</h2>
          <div className="form-control w-full">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
              id="email"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
          </div>
          <button className="btn btn-primary w-48 mt-2">Login</button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
