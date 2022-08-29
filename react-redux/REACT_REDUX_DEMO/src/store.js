import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cakesReducer from "./redux/cake/cakeReducer";
import iceCreamReducer from "./redux/icecream/icecreamReducer";
import juiceReducer from "./redux/juice/juiceReducers";
import logger from "redux-logger";
const rootReducer = combineReducers({
  cake: cakesReducer,
  iceCream: iceCreamReducer,
  juice: juiceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [logger];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export default store;
