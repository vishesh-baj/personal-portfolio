import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of interation: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Add Iteration</button>
    </>
  );
};

export default HooksCakeContainer;
