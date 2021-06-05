import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

const Error = () => {
  return (
    <>
      <h2>AN ERROR OCCURED</h2>
      <h5>Reasons</h5>
      <ul>
        <li>You manually searched for a wrong link</li>
        <li>
          You are logged in
          <p>
            <i>
              try loggin out <Link to="/private">LOGOUT</Link>
            </i>
          </p>
        </li>
      </ul>
      <Link to="/register">Register</Link>
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Home page</h2>
      <p>
        <Link to="/register">Register</Link> <br />
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/private" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
