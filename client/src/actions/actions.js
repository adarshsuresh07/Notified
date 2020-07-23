import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { login, logout } from "../utils/Token";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Auth Actions

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      login(token);
      setAuthToken(token);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = userData => {
  return {
    type: SET_CURRENT_USER,
    payload: userData
  };
};

export const setUserData = userData => dispatch => {
  dispatch(setCurrentUser(userData));
}

export const logoutUser = () => dispatch => {
  logout();
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

// Feed Actions

export const showData = (data, stack) => dispatch => {
  if (data && Object.keys(data).includes("position")) {
    dispatch({ type: "Modal-On", data: data, stack: stack });
  }
  else
    dispatch({ type: "Modal-Off" });
};