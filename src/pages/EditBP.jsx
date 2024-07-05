import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";

const EditBP = () => {
  const [post, setPost] = useState(null);

  const id = useParams().id;
  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");

  const baseUrl = "https://recp-backend.onrender.com";

  const navigateTo = useNavigate();

  const headers = { Authorization: `Bearer ${token} ` };

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const data = {
        title: `${editedValues.title}`,
        description: `${editedValues.description}`,
      };
      console.log(data);

      const response = await axios.put(`${baseUrl}/posts/${id}`, data, {
        headers,
      });

      console.log(response);

      console.log(data);

      if (response.status === 204) {
        setTimeout(() => {
          toast.success("Post sent successfully");
        }, 1000);
        navigateTo("/Blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetApost = async () => {
    console.log(id);
    const response = await axios.get(`${baseUrl}/posts/${id}`);
    setPost(response?.data);
    console.log(response);
  };

  useEffect(() => {
    GetApost();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedValues((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const [editedValues, setEditedValues] = useState({
    title: "",
    description: "",
  });

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }
  return (
    <div className="add-cont">
      <Toaster />
      <div className="intro-2">
        <div className="abt">
          <span className="acc-3">Make a blog post</span>
          <p className="tng">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
      <form onSubmit={handleSub} className="fom">
        <div className="title">
          <div className="blog-t">
            <div className="blog-tt">
              <label className="tingss">Title</label>
              <input
                name="title"
                onChange={handleChange}
                className="bb-name"
                type="text"
                placeholder={post?.title}
                value={editedValues.title}
              />
            </div>
          </div>
          <div className="b-dd">
            <label className="tingss" htmlFor="">
              Content
            </label>
            <textarea
              cols="30"
              rows="5"
              onChange={handleChange}
              className="bb-d-name"
              name="description"
              type="text"
              placeholder={post?.description}
              value={editedValues.description}
            ></textarea>
          </div>
        </div>
        <button className="sb">Submit</button>
      </form>
    </div>
  );
};

export default EditBP;
