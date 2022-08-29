import { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [cakeAmount, setCakeAmount] = useState(1);
  return (
    <>
      <h2>Number of cakes: {props.numOfCakes}</h2>

      <input
        onChange={(e) => setCakeAmount(e.target.value)}
        value={cakeAmount}
        type="number"
        name=""
        id=""
      />
      <button onClick={() => props.buyCake(cakeAmount)}>
        Buy {cakeAmount} Cake
      </button>
    </>
  );
};

// getting state from store
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// dispatching action
const mapDispatchToProps = (dispatch) => {
  // get dispatch as a parameter
  return {
    // can be accessed from props as props.buyCake()
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// connecting two function with cake container and cake container to redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
