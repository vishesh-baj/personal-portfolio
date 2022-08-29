const { default: axios } = require("axios");
const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;

// state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
// action
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
// action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFaliure = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

// action creator
// thuk helps to returb a function instead of action that are not pure and return dispatch as argument in the returned function
const fetchUsers = () => {
  // contains dispatch
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the array of users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchUsersFaliure(error.message));
      });
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// middlewares
const middlewares = [thunkMiddleware];

const store = redux.createStore(reducer, redux.applyMiddleware(...middlewares));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
