import { ComponentType, ReactNode } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";
type PrivateProps = {
  isLoggedIn: boolean;
  Component: ComponentType<ProfileProps>;
};
const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Vishesh" />;
  } else {
    return <Login />;
  }
};

export default Private;
