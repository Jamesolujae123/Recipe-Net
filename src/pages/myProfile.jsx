import React from "react";
import "./Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");

  const headers = { Authorization: `Bearer ${token}` };

  const getUserData = async () => {
    const userData = await axios.get(`https://recp-backend.onrender.com/user`, {
      headers,
    });

    if (userData.status === 200) {
      console.log(userData);
      setUserInfo(userData.data);
    } else {
      // console.log("An error occured");
      // localStorage.setItem("user_id", "");
    }

    console.log(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const usr = useContext(UserL);
  const welc = useContext(Welcome);
  const data = useContext(AppContext);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  return (
    <div className="profile-container">
      <div className="prof-top">
        <span className="profff">My profile details</span>
      </div>

      <div className="prof-cont">
        <div className="profile-details">
          <div>
            <img src="#" alt="" className="user-prof" />
          </div>
          <span>
            <span>{userInfo?.first_name}</span>
            <span> {userInfo?.last_name}</span>
          </span>
          <span>Email: {userInfo?.email}</span>
          {/* <span>Phone Number:</span> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
