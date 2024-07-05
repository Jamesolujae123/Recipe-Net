import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import Contact from "./contactUs";
import profile from "../assets/Ellipse 38.png";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserOptions } from "../AppContext";
import { Toaster, toast } from "sonner";
import { Welcome, AppContext, UserL } from "../AppContext";
import BlogArray from "../components/BLogArray";
import SecblogArray from "../components/SecblogArray";
import ThirdBlogArray from "../components/ThirdBlogArray";
import FourthBlogArray from "../components/FourthBlogArray";

const Blog = () => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

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
    <div className="blog-container">
      <BlogArray BlogHead={"Latest"} />
      <SecblogArray BlogHead={"Trending"} />
      <ThirdBlogArray BlogHead={"Hot"} />
      <FourthBlogArray BlogHead={"New arrival"} />
    </div>
  );
};

export default Blog;
