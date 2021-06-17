import React from "react";
import { useEffect } from "react";
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
const UserPlanation = ({ history }) => {
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
    const fetchPrivateDate = async () => {
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      //   },
      // };

      try {
        // const { data } = await axios.get("/api/private", config);
        // setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
      }
    };

    fetchPrivateDate();
  }, [history]);

  return (
    <div>
      <div style={{ margin: "100px", textAlign: "center" }}>
        <h1>Welcome ADMIN</h1>
        <div style={{ background: "green", color: "white" }}>
          Yo Yo, You logged in to this <i>secret route</i>
          <br />
        </div>
        <h4>Here are some secret for you Because you are Senior Man</h4>
        <h1>FREDRICK IS SO SO SO SO SO SO SO SO HANDSOME </h1>
        <h2>Over handsomeness dey kill am</h2>
        <p>
          <i>
            If you wan ball out <br /> oya na disembark
          </i>
        </p>
        <button
          onClick={logoutHandler}
          style={{
            background: "rgb(88, 82, 82)",
            fontSize: "20px",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <h2> Logout</h2>
        </button>
        <br />
        <div
          style={{
            background: "green",
            color: "white",
            textAlign: "center",
          }}
        >
          Made with love <br />
          <i>divo_fred</i>
        </div>
      </div>
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
          <Route exact path="/admin" component={UserPlanation} />
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
