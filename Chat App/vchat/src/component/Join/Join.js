import React, { useState } from "react";
import "./Join.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div className="joinpage">
      <div className="joincontainer">
        <img src={logo} alt="logo"></img>
        <h1>V Chat</h1>

        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          type="text"
          id="joinInput"
        />

        <Link onClick={(e) => (!name ? e.preventDefault() : null)} to="/Chat">
          {" "}
          <button onClick={sendUser} className="joinbtn">
            Login In
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
