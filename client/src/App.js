import React, { Component } from 'react';
import "./Assets/css/main.css"
import PublicRoute from "./Route/Publicroute"
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing"
import Dashboard from "./Components/Dashboard/Dashboard.jsx"
import 'bootstrap/dist/css/bootstrap.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { isLogin, getToken} from './utils/Token'
if (isLogin()) {
  const token = getToken();
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <PublicRoute component={Landing} path="/" exact />
            <PublicRoute component={Dashboard} path="/dashboard" exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
