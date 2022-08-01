import React from "react";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content">
        <div className="w-full md:w-96 h-96 p-10 bg-secondary shadow-xl rounded-lg flex flex-col  gap-2">
          <h2 className="text-4xl font-bold">Login</h2>
          <div className="form-control w-full">
            {/* TODO: email specific formData is provided form the backend in future */}
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

          {/* form control for providing specific tasks to individual input provided in the such a way rhgat the corrosponding elements are exposed to mainframe apis and can be exploited for the following reasons*/}

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
        </div>
      </div>
    </div>
  );
};

// Login routing provided for the specific consrtructa fo thgew following transhuman transatlantic currents
export default LoginPage;
