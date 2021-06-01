import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import "./PrivateScreen.css";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  // const [privateData, setPrivateData] = useState("");

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
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div style={{ margin: "100px", textAlign: "center" }}>
      <div style={{ background: "green", color: "white" }}>
        Yo Yo, You logged in to this <i>secret route</i>
        <br />
      </div>
      <h4>Here are some secret for you</h4>
      <h1>FREDRICK IS SO SO SO SO SO SO SO SO HANDSOME </h1>
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
  );
};

export default PrivateScreen;
