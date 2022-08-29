import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/icecream/icecreamActions";

const IcecreamContainer = () => {
  const dispatch = useDispatch();
  const numOfIcecreams = useSelector((state) => state.numOfIcecreams);
  return (
    <div>
      <h1>Total Icecreams: {numOfIcecreams}</h1>
      <button onClick={() => dispatch(buyIceCream())}>buy icecream</button>
    </div>
  );
};

export default IcecreamContainer;
