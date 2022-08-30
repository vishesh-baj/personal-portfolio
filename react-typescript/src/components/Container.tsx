import { CSSProperties } from "react";

type ContainerProps = {
  styles: CSSProperties;
};
const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text Goes here</div>;
};

export default Container;
