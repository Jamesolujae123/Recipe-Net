import React, { useState, useEffect, useContext } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { User, Welcome } from "../AppContext";
import { AppContext } from "../AppContext";
import axios from "axios";

const Sigin = () => {
  const [signValues, setSignValues] = useState({
    email: "",
    password: "",
  });

  const data = useContext(AppContext);
  const usr = useContext(User);

  const welc = useContext(Welcome);

  const [pending, setPending] = useState(false);

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignValues((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const validateInputs = () => {
    let errors = {};
    if (!signValues.email || signValues.email.length == 0) {
      errors.email = "username cannot be empty";
    }
    if (!signValues.password) {
      errors.password = "password cannot be empty";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://recp-backend.onrender.com/token`,
      signValues
    );

    if (response.status === 200) {
      const token = response?.data?.token;
      console.log(token);
      localStorage.setItem("token", token);
      console.log(response);
      navigateTo("/");
    } else {
      e.preventDefault();
      localStorage.setItem("token", "");
    }

    // setPending(true);

    // setPending(false);
  };

  return (
    <div className="s-bk">
      <div className="wrappert">
        <h1 className="headd">Hello Again!</h1>
        <p className="tooo">
          Welcome back you've <br /> been missed!
        </p>
        <form onSubmit={handleSubmit} className="bacc">
          <input
            name="email"
            type="text"
            value={signValues.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <input
            name="password"
            type="password"
            value={signValues.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <p className="recover">
            <a className="tingww" href="#">
              Recover Password
            </a>
          </p>
          <button disabled={pending} className="m">
            {pending ? "Signing" : "Sign in"}
          </button>
        </form>

        <p className="or">----- or continue with -----</p>
        <div className="icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <div className="not-member">
          Not a member? <Link to={"/sign-up"}>Register Now</Link>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Sigin;
