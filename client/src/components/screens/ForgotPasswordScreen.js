import React from "react";
// import { useState } from "react";
// import axios from "axios";
import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  // const forgotPasswordHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const { data } = await axios.post(
  //       "/api/auth/forgotpassword",
  //       { email },
  //       config
  //     );

  //     setSuccess(data.data);
  //   } catch (error) {
  //     setError(error.response.data.error);
  //     setEmail("");
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };

  return (
    <div className="forgotpassword-screen">
      <h1 className="forgotpassword-screen__title">
        This Page is not Available
      </h1>
      {/* {error && <span className="error-message">{error}</span>} */}
      {/* {success && <span className="success-message">{success}</span>} */}
    </div>
  );
};

export default ForgotPasswordScreen;
