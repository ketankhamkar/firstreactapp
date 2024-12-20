import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log("kkk===", email, password);
  const onPressButton = () => {
    if (email === password) {
      navigate("/");
    }
  };

  return (
    <div className="bg-slate-600 flex flex-1 flex-col h-screen w-full justify-center items-center">
      <div
        className="bg-white h-full my-20 w-full sm:w-4/5 md:w-1/2"
        style={{
          borderRadius: 10,
          padding: 10,
          width: "50%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Login
        </h1>
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            borderBottomWidth: 1,
            borderColor: "#000",
            padding: 10,
            width: "100%",
            outline: "none",
          }}
        />
        <div style={{ height: 30 }} />
        <label style={{ marginTop: 50 }}>Password</label>
        <br />
        <input
          type="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderBottomWidth: 1,
            borderColor: "#000",
            padding: 10,
            width: "100%",
            outline: "none",
          }}
        />
        <br />
        <div style={{ height: 30 }} />
        <button
          style={{
            backgroundColor: "#4caf50",
            width: "100%",
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px", // Makes the text readable
            fontWeight: "bold", // Makes the text more prominent
            borderRadius: "5px", // Adds rounded corners to the button for better styling
            transition: "background-color 0.3s ease",
            marginTop: 10,
          }}
          onClick={onPressButton}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
