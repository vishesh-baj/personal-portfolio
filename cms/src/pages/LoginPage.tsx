import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../paths";
type Props = {};
type FormData = {
  email: string;
  password: string;
};
const LoginPage = (props: Props) => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("enter valid email")
      .required("email is required"),

    password: yup
      .string()
      .min(6, "minimium 6 characters")
      .required("password is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate(PATHS.dashboard);
  });
  return (
    <div className="w-screen h-screen container mx-auto flex items-center justify-center">
      <div
        className={`card w-96 h-[calc(h-screen - h-96 )]  shadow-lg text-neutral-content mx-5 transition-all ease-in-out duration-500 ${
          errors.email || errors.password
            ? "shadow-rose-600"
            : "shadow-accent-focus"
        }`}
      >
        <div className="card-body">
          <h2 className="card-title text-accent text-4xl">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-control mb-2">
              <label htmlFor="email-input">Email</label>
              <input
                {...register("email")}
                type="text"
                id="email-input"
                className="input input-accent mt-2"
                name="email"
              />
              <p className="text-error">{errors.email?.message}</p>
            </div>
            <div className="form-control mb-2">
              <label htmlFor="password-input">Password</label>
              <input
                {...register("password")}
                type="password"
                id="password-input"
                className="input input-accent mt-2"
                name="password"
              />
              <p className="text-error">{errors.password?.message}</p>
            </div>
            <Link
              className="underline cursor-pointer"
              to={PATHS.forgotPassword}
            >
              forgot password
            </Link>
            <div className="card-actions mt-4">
              <button type="submit" className="btn btn-accent">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
