import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";
import "./blogd.css";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";

const Blogd = () => {
  const [post, setPost] = useState(null);

  const token = localStorage.getItem("token");

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  const userLastName = localStorage.getItem("user_lastName");

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  const id = useParams().id;

  const baseUrl = "https://recp-backend.onrender.com";

  const GetApost = async () => {
    console.log(id);
    const response = await axios.get(`${baseUrl}/posts/${id}`);
    setPost(response?.data);
    console.log(response);
  };

  useEffect(() => {
    GetApost();
  }, []);

  return (
    <div className="post-cont">
      <div className="d-cont">
        <div className="wrapper">
          {/* <img className="meat" src={} alt="" /> */}
        </div>
        {
          <div className="d-det">
            <div className="ini">
              <div className="bars"></div>
              <div className="bap-name">
                <p className="tittle">{post?.title}</p>
                {/* <span className="d-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <MdOutlineStarBorder />
                </span> */}
              </div>
            </div>

            <span className="date">
              Date: <span className="d">{post?.updatedAt.slice(0, 10)}</span>
            </span>
            <div className="inin">
              <div className="d-content">
                <p className="p-connttt">{post?.description}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Blogd;
