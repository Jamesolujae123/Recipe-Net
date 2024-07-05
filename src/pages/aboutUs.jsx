import React from "react";
import { useContext } from "react";
import { AppContext, Welcome, UserL } from "../AppContext";

const AboutUs = () => {
  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }
  return (
    <div>
      {" "}
      <div className="intro-2">
        <div className="abt">
          <span className="acc-3">About us</span>
          <p className="tng">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
