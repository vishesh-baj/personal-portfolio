type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return <button onClick={(e) => props.handleClick(e, 1)}>Button</button>;
};

export default Button;
