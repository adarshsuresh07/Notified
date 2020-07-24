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

// Toast Actions

export const handleToast = (type, data) => dispatch => {
  if (data) {
    dispatch({ type: "Show_Toast", result: type, data: data });
  }
  else
    dispatch({ type: "OFF_Toast" });
}


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
      var active = [], inactive = [];
      data.forEach(item => {
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
  var { opdata, tododata } = data;
  var todoop, opindex;
  opdata.forEach((item, index) => {
    if (item._id === id) {
      todoop = item;
      opindex = index;
    }
  });
  opdata.splice(opindex, 1);
  tododata = [todoop, ...tododata];
  dispatch(handleToast('success', "Successfully added to Todo!"));
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
  var { tododata, applieddata } = data;
  var todoop, opindex;
  tododata.forEach((item, index) => {
    if (item._id === id) {
      todoop = item;
      opindex = index;
    }
  });
  tododata.splice(opindex, 1);
  applieddata = [todoop, ...applieddata];
  dispatch(handleToast('success', "Successfully added to Applied!"));
  dispatch({
    type: "SET_DATA",
    opdata: data.opdata,
    exdata: data.exdata,
    tododata: tododata,
    applieddata: applieddata
  });

}

export const deleteTodo = (id) => dispatch => {
  const data = store.getState().opps;
  var { opdata, tododata } = data;
  var todoop, opindex;
  tododata.forEach((item, index) => {
    if (item._id === id) {
      todoop = item;
      opindex = index;
    }
  });
  tododata.splice(opindex, 1);
  opdata = [todoop, ...opdata];
  dispatch(handleToast('success', "Successfully removed from Todo!"));
  dispatch({
    type: "SET_DATA",
    opdata: opdata,
    exdata: data.exdata,
    tododata: tododata,
    applieddata: data.applieddata
  });
}

export const deleteApplied = (id) => dispatch => {
  const data = store.getState().opps;
  var { tododata, applieddata } = data;
  var todoop, opindex;
  applieddata.forEach((item, index) => {
    if (item._id === id) {
      todoop = item;
      opindex = index;
    }
  });
  applieddata.splice(opindex, 1);
  tododata = [todoop, ...tododata];
  dispatch(handleToast('success', "Successfully removed from Applied!"));
  dispatch({
    type: "SET_DATA",
    opdata: data.opdata,
    exdata: data.exdata,
    tododata: tododata,
    applieddata: applieddata
  });
}

export const addOp = (data) => dispatch => {
  console.log(store.getState());
}