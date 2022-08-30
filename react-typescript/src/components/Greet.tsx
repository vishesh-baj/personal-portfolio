type GreetProps = {
  name: string;
  // option props
  isLoading?: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoading ? <h1>Hello {props.name}</h1> : "Login required"}
    </div>
  );
};

export default Greet;
