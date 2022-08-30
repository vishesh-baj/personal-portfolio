import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    console.log(e, value);
  };
  return (
    <input type="text" onChange={props.handleChange} value={props.value} />
  );
};

export default Input;
