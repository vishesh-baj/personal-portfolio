import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numOfIcecreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.iceCream.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
