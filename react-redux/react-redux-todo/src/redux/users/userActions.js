import axios from "axios";
import {
  DELETE_USER,
  FETCH_USERS_FALIURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  ADD_USER,
} from "./userActionTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchusersSuccess = (users) => {
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

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};

export const addUser = (userObj) => {
  return {
    type: ADD_USER,
    payload: userObj,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchusersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFaliure(error));
      });
  };
};
