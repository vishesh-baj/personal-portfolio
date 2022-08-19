import { createContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../paths/paths";
const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is required"),
  });

  // login to application
  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
        .then(() => localStorage.setItem("token", "token"))
        .finally(() => location.reload());

      console.log(res);
    } catch (error) {
      navigate(PATHS.errror);
      console.log(error);
    }
  };

  // Logout of the application
  const logout = async () => {
    await signOut(auth)
      .then(() => localStorage.clear())
      .finally(() => location.reload());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // by default mode is onSubmit
    mode: "onChange",
    // sets default state of the form
    defaultValues: {
      email: "admin@tophatsoftware.com",
      password: "admin@1234",
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <LoginContext.Provider
      value={{ register, handleSubmit, errors, login, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
