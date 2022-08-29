import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cakesReducer from "./redux/cake/cakeReducer";
import iceCreamReducer from "./redux/icecream/icecreamReducer";
import juiceReducer from "./redux/juice/juiceReducers";
import logger from "redux-logger";
import userReducer from "./redux/user/userReducers";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  cake: cakesReducer,
  iceCream: iceCreamReducer,
  juice: juiceReducer,
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger, thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export default store;
