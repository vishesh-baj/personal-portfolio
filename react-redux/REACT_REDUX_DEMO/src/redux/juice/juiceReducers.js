import { BUY_JUICE } from "./juiceActionTypes";

const initialState = {
  numOfJuices: 30,
};

const juiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JUICE:
      return {
        ...state,
        numOfJuices: state.numOfJuices,
      };

    default:
      return state;
  }
};

export default juiceReducer;
