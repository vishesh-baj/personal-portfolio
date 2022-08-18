import { createContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
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
    <LoginContext.Provider value={{ register, handleSubmit, errors }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
