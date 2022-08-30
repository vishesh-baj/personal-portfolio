import { ReactNode } from "react";

type OscerProps = {
  children: ReactNode;
};
const Oscar = (props: OscerProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
