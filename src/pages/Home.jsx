import React, { useContext, useEffect } from "react";
import Prime from "../components/Prime";
import Prim from "../components/Prim";
import { Toaster, toast } from "sonner";
import { User, UserL, Welcome } from "../AppContext";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const usr = useContext(UserL);
  const userFN = useContext(User);

  const welc = useContext(Welcome);

  const data = useContext(AppContext);
  const navigateTo = useNavigate();

  const token = localStorage.getItem("token");

  console.log(token);
  const headers = { Authorization: `Bearer ${token}` };
  const getUserData = async () => {
    const userData = await axios.get(`https://recp-backend.onrender.com/user`, {
      headers,
    });

    if (userData.status === 200) {
      const id = userData?.data?.id;
      userFN.setUser(userData?.data?.first_name);
      usr.setUserLN(userData?.data?.last_name);
      localStorage.setItem("user_lastName", userData?.data?.last_name);
      localStorage.setItem("user_id", id);
      const getid = localStorage.getItem("user_id");
      console.log(getid);
    } else {
      // console.log("An error occured");
      // localStorage.setItem("user_id", "");
    }

    console.log(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (!token) {
    welc.setWelcome(false);
    data.setIsLoggedin(false);
    return (
      <div>
        <Prime />
        <Prim heading={"Trending"} />
      </div>
    );
  } else {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    return (
      <div className="divvvvv">
        <Prime />
        <Prim heading={"Trending"} />
      </div>
    );
  }
};

export default Home;
