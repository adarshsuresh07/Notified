import setAuthToken from "../utils/setAuthToken";
import { logout } from "../utils/Token";
import store from "../store"
import { SET_CURRENT_USER } from "./types";
import axios from "axios"
// Auth Actions

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

export const setData = () => dispatch => {
  axios.get("/api/openings/all")
    .then(res => {
      const data = res.data;
      console.log(store.getState());
      var active = [], inactive = [];
      data.map(item => {
        if (item.active)
          active.push(item);
        else
          inactive.push(item)
      })
      dispatch({
        type: "SET_DATA",
        opdata: active,
        exdata: inactive,
        tododata: [],
        applieddata: []
      });
    }).catch(err => {
      console.log(err.response);
    })
}

export const addTodo = (id) => dispatch => {
  const data = store.getState().opps;
  var opdata = data.opdata;
  var tododata = data.tododata;
  var todoop, opindex;
  opdata.map((item, index) => {
    if (item._id == id) {
      todoop = item;
      opindex = index;
    }
  });
  opdata.splice(opindex, 1);
  tododata = [todoop, ...tododata];
  dispatch({
    type: "SET_DATA",
    opdata: opdata,
    exdata: data.exdata,
    tododata: tododata,
    applieddata: data.applieddata
  });
}

export const addApplied = (id) => dispatch => {
  const data = store.getState().opps;
  var applieddata = data.applieddata;
  var tododata = data.tododata;
  var todoop, opindex;
  tododata.map((item, index) => {
    if (item._id == id) {
      todoop = item;
      opindex = index;
    }
  });
  tododata.splice(opindex, 1);
  applieddata = [todoop, ...applieddata];
  dispatch({
    type: "SET_DATA",
    opdata: data.opdata,
    exdata: data.exdata,
    tododata: tododata,
    applieddata: applieddata
  });

}

export const deleteTodo = (id) => dispatch => {
  console.log(store.getState());
}

export const deleteApplied = (id) => dispatch => {
  console.log(store.getState());
}

export const addOp = (data) => dispatch => {
  console.log(store.getState());
}