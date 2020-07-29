import setAuthToken from "../utils/setAuthToken";
import { getToken, logout, isLogin } from "../utils/Token";
import store from "../store"
import { SET_CURRENT_USER } from "./types";
import axios from "axios"
import jwt_decode from "jwt-decode";

// Auth Actions

export const setCurrentUser = userData => {
  return {
    type: SET_CURRENT_USER,
    payload: userData
  };
};

const checkToken = () => {
  console.log("hi");
  if (isLogin()) {
    const token = getToken();
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return true;
    }
  }
  return false;
}

export const setUserData = () => dispatch => {
  const token = getToken();
  axios.post("/api/users/getuser/" + token)
    .then(res => {
      dispatch(setCurrentUser(res.data));
      dispatch(setData());
    })
    .catch(err =>
      console.log(err.response)
    )
}

export const logoutUser = () => dispatch => {
  logout();
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  window.location.href = "/";
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

export const newData = (data) => dispatch => {
  if (checkToken()) {
    dispatch(logoutUser());
    window.location.href = "/";
    dispatch(handleToast("warn", "Token time out. Pls login again"));
  }
  else {
    const newOP = {
      position: data.position,
      company: data.company,
      category: data.category,
      type: data.type,
      due: data.due,
      active: true,
      description: data.description,
      contact: data.contact,
      applylink: data.applylink,
      furtherdetails: data.furtherdetails,
      posted_by: store.getState().auth.user.id,
    }
    axios.post("/api/openings/create", newOP)
      .then(res => {
        dispatch(handleToast('success', "Successfully added new Opportunity!"));
        const op = res.data.newEntry
        const data = store.getState().opps;
        var { opdata, exdata } = data;
        const today = new Date();
        const duedate = new Date(op.due);
        if (duedate >= today)
          opdata = [op, ...opdata];
        else
          exdata = [op, ...exdata];
        dispatch({
          type: "SET_DATA",
          opdata: opdata,
          exdata: exdata,
          tododata: data.tododata,
          applieddata: data.applieddata
        });
        dispatch(showData());
      }).catch(error => {
        console.log(error.response)
        if (error.response.data.error)
          dispatch(handleToast('error', error.response.data.error));
      }
      );
  }
}
export const setData = () => dispatch => {
  const { todo, applied } = store.getState().auth.user;
  axios.get("/api/openings/all")
    .then(res => {
      const data = res.data;
      var active = [], inactive = [], tododata = new Array(todo.length), applieddata = new Array(applied.length);
      data.forEach(item => {
        const today = new Date();
        const duedate = new Date(item.due);
        if (todo.some(t => t.id === item._id))
          tododata[todo.findIndex(t => t.id === item._id)] = item;
        else if (applied.some(t => t.id === item._id))
          applieddata[applied.findIndex(t => t.id === item._id)] = item;
        else if (duedate >= today)
          active.push(item);
        if (duedate < today)
          inactive.push(item);
      })
      dispatch({
        type: "SET_DATA",
        opdata: active.reverse(),
        exdata: inactive.reverse(),
        tododata: tododata,
        applieddata: applieddata
      });
    }).catch(err => {
      console.log(err.response);
    })
}

export const addTodo = (id) => dispatch => {
  if (checkToken()) {
    dispatch(logoutUser());
    window.location.href = "/";
    dispatch(handleToast("warn", "Token time out. Pls login again"));
  }
  else {
    const data = store.getState().opps;
    var { opdata, tododata } = data;
    var todoop, opindex;
    const sendData = {
      "userid": store.getState().auth.user.id,
      "openingid": id
    }
    axios.post("/api/lists/todo/add", sendData)
      .then(res => {
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
      }).catch(error =>
        dispatch(handleToast('error', "Couldn't added to Todo!"))
      );
  }
}

export const addApplied = (id) => dispatch => {
  if (checkToken()) {
    dispatch(logoutUser());
    window.location.href = "/";
    dispatch(handleToast("warn", "Token time out. Pls login again"));
  }
  else {
    const data = store.getState().opps;
    var { tododata, applieddata } = data;
    var todoop, opindex;
    const sendData = {
      "userid": store.getState().auth.user.id,
      "openingid": id
    }
    axios.post("/api/lists/applied/add", sendData)
      .then(res => {
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
      }).catch(error =>
        dispatch(handleToast('error', "Couldn't added to Applied!"))
      );
  }
}

export const deleteTodo = (id) => dispatch => {
  if (checkToken()) {
    dispatch(logoutUser());
    window.location.href = "/";
    dispatch(handleToast("warn", "Token time out. Pls login again"));
  }
  else {
    const data = store.getState().opps;
    var { opdata, tododata } = data;
    var todoop, opindex;
    const sendData = {
      "userid": store.getState().auth.user.id,
      "openingid": id
    }
    axios.post("/api/lists/todo/remove", sendData)
      .then(res => {
        tododata.forEach((item, index) => {
          if (item._id === id) {
            todoop = item;
            opindex = index;
          }
        });
        tododata.splice(opindex, 1);
        const today = new Date();
        const duedate = new Date(todoop.due);
        if (duedate >= today)
          opdata = [todoop, ...opdata];
        dispatch(handleToast('success', "Successfully removed from Todo!"));
        dispatch({
          type: "SET_DATA",
          opdata: opdata,
          exdata: data.exdata,
          tododata: tododata,
          applieddata: data.applieddata
        });
      }).catch(error =>
        dispatch(handleToast('error', "Couldn't remove from Todo!"))
      );
  }
}

export const deleteApplied = (id) => dispatch => {
  if (checkToken()) {
    dispatch(logoutUser());
    window.location.href = "/";
    dispatch(handleToast("warn", "Token time out. Pls login again"));
  }
  else {
    const data = store.getState().opps;
    var { tododata, applieddata } = data;
    var todoop, opindex;
    const sendData = {
      "userid": store.getState().auth.user.id,
      "openingid": id
    }
    axios.post("/api/lists/applied/back", sendData)
      .then(res => {
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
      }).catch(error =>
        dispatch(handleToast('error', "Couldn't add back to Todo!"))
      );
  }
}
