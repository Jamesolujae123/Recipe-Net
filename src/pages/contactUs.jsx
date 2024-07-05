import React from "react";
import "./contactUs.css";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";

const Contact = () => {
  const token = localStorage.getItem("token");

  const userLastName = localStorage.getItem("user_lastName");

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  return (
    <div>
      <div className="intro-2">
        <div className="abt">
          <span className="acc-3">Contact us</span>
          <p className="tng">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
