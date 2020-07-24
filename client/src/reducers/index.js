import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import feedReducer from "./feedReducer";
import opReducer from "./opReducer";
import toastReducer from "./toastReducer"
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  feed: feedReducer,
  opps: opReducer,
  toast: toastReducer
});
