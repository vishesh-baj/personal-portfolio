import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  // * IN PARENT DIV IF WANT TO ADD IMAGE AS BACKGROUND bg-[url(https://placeimg.com/1000/800/arch)]  bg-cover bg-no-repeat
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Admin Dashboard</h1>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-5">
              This is a portfolio dummy erp system with all the cutting edge
              technologies in development.
              <br /> <a href="www.google.com">know more</a>
            </p>
          </div>

          <Link to="/login" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
