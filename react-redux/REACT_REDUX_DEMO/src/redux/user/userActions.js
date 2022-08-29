import {
  FETCH_USERS_FALIURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";
import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUsersData = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFaliure = (error) => {
  return {
    type: FETCH_USERS_FALIURE,
    payload: error,
  };
};

// not pure funcion, can have sideeffects, receives dispatch as its argument
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersData(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFaliure(errorMsg));
      });
  };
};
