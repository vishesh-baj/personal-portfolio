const redux = require("redux");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const createStore = redux.createStore;

const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
// action in redux
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

{
  type: BUY_CAKE;
  info: "First Redux Action";
}
// action creater:  function that returns the action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
};
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: "First Redux Action",
  };
};

// reducer is:  (previous state, action) => newState
// state of application before making any change

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// cake state
const InitalCakeState = {
  numOfCakes: 10,
};
// icecream state
const InitialIceCreamState = {
  numOfIceCreams: 20,
};

// cake reducer
const cakeReducer = (state = InitalCakeState, action) => {
  // managing only numOfCakes state
  switch (action.type) {
    case BUY_CAKE:
      return {
        // make copy of state
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// icecream reducer
const iceCreamReducer = (state = InitialIceCreamState, action) => {
  // managing only numOfIceCreams state
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// global state object
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
// creating middlewares
const middlewares = [logger];
// using middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));
console.log("initial state: ", store.getState());
// subscribe
const unsubscribe = store.subscribe(() => {});
// dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
