import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import Input from "../components/Input";
const LoginPage = () => {
  const { register, handleSubmit, errors } = useContext(LoginContext);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-primary font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="email"
                  errors={errors}
                  name="email"
                  placeholder="example@123.com"
                  label="email"
                  key="email"
                  register={register}
                />
                <Input
                  type="password"
                  errors={errors}
                  name="password"
                  placeholder="123456"
                  label="Password"
                  key="password"
                  register={register}
                />

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
