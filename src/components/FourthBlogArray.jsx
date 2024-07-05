import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import profile from "../assets/Ellipse 38.png";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";

const FourthBlogArray = ({ BlogHead }) => {
  const [Blog, setBlog] = useState(null);

  const baseUrl = "https://recp-backend.onrender.com";

  const uid = localStorage.getItem("user_id");

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  const userLastName = localStorage.getItem("user_lastName");

  const GetAllPosts = async () => {
    const response = await axios.get(`${baseUrl}/posts`);
    setBlog(response?.data);
    console.log(response);
  };

  const navigateTo = useNavigate();

  const addToblog = () => {
    navigateTo("/addToBlog");
  };

  useEffect(() => {
    GetAllPosts();
  }, []);

  return (
    <div className="blog-cont">
      <div className="blog">
        <div className="blog-title">
          <span className="blog-hh">{BlogHead}</span>
        </div>
        <div className="blog-g">
          {Blog?.slice(0, 3).map((blob) => {
            const deleteAPost = async () => {
              const del = await axios.delete(`${baseUrl}/posts/${blob.id}`, {
                headers,
              });

              console.log(del);
              if (del.status === 204) {
                toast.success("Post deleted successfully");
              }
            };

            const toEditPage = () => {
              navigateTo(`/EditB/${blob.id}`);
            };

            return (
              <div className="blo" key={blob}>
                <div className="img-cont">
                  <img className="blog-img" src={blob.image_url} alt="" />
                </div>
                <div
                  className="blo-cont"
                  onClick={() => {
                    navigateTo(`/Blog-cont/${blob.id}`);
                  }}
                >
                  <div className="auth-cont">
                    <div>
                      <span className="auth">{blob.Autor}</span>
                    </div>{" "}
                    <div>
                      <span className="date">
                        Date:{" "}
                        <span className="d">{blob.updatedAt.slice(0, 10)}</span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="t-cont">Title: {blob.title}</span>
                  </div>
                  <div className="b-cont">
                    {blob.description.slice(0, 100)} ...
                  </div>
                </div>
                <div>
                  {blob.user_id == uid ? (
                    <div className="options-cont">
                      <button className="eb" onClick={toEditPage}>
                        Edit
                      </button>
                      <form action="">
                        <button className="del-b" onClick={deleteAPost}>
                          Delete
                        </button>
                      </form>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="comment-sec">
                    <button onClick={navigateTo("")}>Comment</button>
                  </div>
                </div>
              </div>
            );
          })}

          <div>
            <button className="add-b" onClick={addToblog}>
              Add to blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthBlogArray;
