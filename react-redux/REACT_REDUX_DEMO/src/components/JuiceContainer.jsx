import { useDispatch, useSelector } from "react-redux";
import { buyJuice } from "../redux/juice/juiceActions";

const JuiceContainer = () => {
  const dispatch = useDispatch();
  const numOfJuices = useSelector((state) => state.juice.numOfJuices);
  return (
    <div>
      <h1>Number of juiuces : {numOfJuices}</h1>
      <button onClick={() => dispatch(buyJuice())}>buy a juice</button>
    </div>
  );
};

export default JuiceContainer;
