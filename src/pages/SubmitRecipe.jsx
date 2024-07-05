import React from "react";
import "./SubmitRecipe.css";
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "@orrisroot/react-html-parser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";

const AddRecipe = () => {
  const [ingr, setIngr] = useState("");
  const [steps, setSteps] = useState("");
  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");
  const baseUrl = "https://recp-backend.onrender.com";

  const navigateTo = useNavigate();

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  const headers = { Authorization: `Bearer ${token} ` };

  const handleI = (e, editor) => {
    setIngr(editor.getData());
  };

  const handleP = (e, editor) => {
    setSteps(editor.getData());
  };

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const data = {
        food_name: `${repValues.food_name}`,
        description: `${repValues.description}`,
        ingredients: `${ingr}`,
        preparation: `${steps}`,
        image_url: `image`,
        video_url: `video`,
      };
      console.log(data);

      const response = await axios.post(`${baseUrl}/recipes`, data, {
        headers,
      });

      console.log(response);

      console.log(data);

      if (response) {
        setTimeout(() => {
          toast.success("Recipe sent successfully");
        }, 1000);
      }

      navigateTo("/");
      const formData = new FormData();
      formData.append("image");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepValues((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const [repValues, setRepValues] = useState({
    food_name: "",
    description: "",
    ingredients: `${ingr}`,
    preparation: `${steps}`,
    image_url: "",
    video_url: "",
  });
  return (
    <div className="add-cont">
      <div className="intro-2">
        <div className="abt">
          <span className="acc-3">Add a Recipe</span>
          <p className="tng">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
      <form onSubmit={handleSub} className="fom">
        <div className="title-contt">
          <div className="til">
            <div className="tt">
              <label className="tingss" htmlFor="">
                Recipe Title
              </label>
              <input
                name="food_name"
                onChange={handleChange}
                className="r-name"
                type="text"
                value={repValues.food_name}
              />
            </div>
          </div>
          <div className="dd">
            <label className="tingss" htmlFor="">
              Description
            </label>
            <textarea
              cols="30"
              rows="5"
              onChange={handleChange}
              className="d-name"
              name="description"
              type="text"
              value={repValues.description}
            ></textarea>
          </div>
        </div>

        <div className="ingr-prep">
          <div className="tpp">
            <div className="food-n">
              <div className="op">
                <p className="tingss">Ingredients</p>
                <CKEditor
                  className=""
                  name="ingredients"
                  value={repValues.ingredients}
                  editor={ClassicEditor}
                  onChange={(e, editor) => {
                    handleI(e, editor);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="food-prep">
            <div className="pp-cc">
              <div>
                <p className="tingss">Preparation</p>
                <CKEditor
                  name="preparation"
                  value={repValues.preparation}
                  editor={ClassicEditor}
                  onChange={(e, editor) => {
                    handleP(e, editor);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="img-video-sec">
          <div className="food-imgr">
            <input
              className=""
              type="file"
              name="image_url"
              onChange={handleChange}
              value={repValues.image_url}
            />
            <label htmlFor="">Add an image</label>
          </div>
          <div>
            <input name="video_url" type="text" placeholder="Video-url" />
          </div>
        </div>
        <button className="sb">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
