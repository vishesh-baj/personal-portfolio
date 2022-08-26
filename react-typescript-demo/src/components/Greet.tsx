import { useState } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
type InputProps = {
  value: String;
  handleChange: () => void;
};

type Inerence = {
  value: string;
  num: Number;
  vortex: Boolean;
  handleChange: () => void;
};

const specifics = () => {
  console.log("Specifics");
};

const Greet = (props: GreetProps) => {
  const [val, setVal] = useState({ name: "", age: "" });
  const handleClick = () => {
    console.log("Clicked on Item container");
  };

  const SpecificsConsoled = () => {
    console.log("Type checking");
    const vals = [1, 2, 3, 4, 5, 6].map((item) => {
      <button onClick={handleClick}>{item}</button>;
    });
    const duplicared = [...vals];
    console.log(`${sortAndDeduplicateDiagnostics}: Contemplated Value`);
  };

  return (
    <div>
      <div>
        <h1>{props.name} is logged in</h1>
        <p>Message Count: {props.messageCount}</p>: <h1>Not logged in</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint
        ullam illum incidunt fuga aut qui laudantium dignissimos, quos
        reprehenderit praesentium voluptatum pariatur odio magnam dicta.
        Inventore praesentium magni dolor.
      </p>
      <div>
        Duplicated Instances are specific to current scenario of this world{" "}
      </div>
    </div>
  );
};

export default Greet;
