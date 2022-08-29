import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <>
      <h2>Number of iteration: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>add iteration</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

// connecting two function with cake container and cake container to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
