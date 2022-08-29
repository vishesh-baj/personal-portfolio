import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_FALIURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
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

    case FETCH_USERS_FALIURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    case DELETE_USER:
      return {
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload),
        error: "",
      };

    case ADD_USER:
      return {
        loading: false,
        users: [...state.users, action.payload],
        error: "",
      };

    default:
      return state;
  }
};

export default userReducer;
