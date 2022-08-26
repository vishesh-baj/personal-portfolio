import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);
  const handleTogglePassword = () => {
    console.log("Clicked toggle");
    setTogglePasswordVisible(!togglePasswordVisible);
  };

  const login = async (loginDetails) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      );

      localStorage.setItem("access-token", response.user.accessToken);
      const token = localStorage.getItem("access-token");
      console.log(`ACCESS TOKEN: ${localStorage.getItem("access-token")}`);
      token && navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // form submit function
  const onSubmit = (data) => login(data);

  const schema = yup.object({
    email: yup
      .string()
      .email("enter valid email")
      .required("field cannot be empty"),
    password: yup
      .string()
      .min(6, "password must be atleast 6 characters long")
      .required("field cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className="hero min-h-screen ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-screen  text-center text-neutral-content">
        <div className="card  w-full md:w-1/2 h-1/2 bg-neutral text-neutral-content">
          <div className="card-body">
            <h2 className="card-title text-4xl">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  defaultValue="admin@erp.com"
                />
                <p className="text-red-400 text-start">
                  {errors.email?.message}
                </p>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type={togglePasswordVisible ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  defaultValue="admin@1234"
                />
                <p className="text-red-400 text-start">
                  {errors.password?.message}
                </p>
                {togglePasswordVisible === false ? (
                  <AiOutlineEye
                    onClick={handleTogglePassword}
                    className="absolute right-2 top-12 text-2xl"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={handleTogglePassword}
                    className="absolute right-2 top-12 text-2xl"
                  />
                )}
              </div>
              <div className="card-actions mt-5">
                <button type="submit" className="btn btn-outline btn-ghost">
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
