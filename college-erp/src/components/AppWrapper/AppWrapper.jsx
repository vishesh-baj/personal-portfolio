import React from "react";
import AppWrapperComponent from "./AppWrapperComponent";
const AppWrapper = ({ children }) => {
  return <AppWrapperComponent>{children}</AppWrapperComponent>;
};
export default AppWrapper;
