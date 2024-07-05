import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "@orrisroot/react-html-parser";
import HtmlParser from "@orrisroot/react-html-parser";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";

const EditRecipe = () => {
  const [ingr, setIngr] = useState("");
  const [steps, setSteps] = useState("");
  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");
  const [foodd, setFoodd] = useState({
    food_name: "",
    description: "",
    ingredients: "",
    preparation: "",
    image_url: "",
    video_url: "",
  });

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  const { id } = useParams();

  const GetARecipe = async () => {
    console.log(id);
    const response = await axios.get(`${baseUrl}/recipes/${id}`);
    setFoodd(response?.data);
    console.log(response);
  };

  useEffect(() => {
    GetARecipe();
  }, []);

  const baseUrl = "https://recp-backend.onrender.com";

  const navigateTo = useNavigate();

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
        food_name: `${foodd?.food_name}`,
        description: `${foodd?.description}`,
        ingredients: `${ingr}`,
        preparation: `${steps}`,
        image_url: `image`,
        video_url: `video`,
      };
      console.log(data);

      const response = await axios.put(`${baseUrl}/recipes/${foodd.id}`, data, {
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
    setFoodd((prevVal) => ({ ...prevVal, [name]: value }));
  };

  return (
    <div>
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
            <div className="food-imgr">
              <input
                className=""
                type="file"
                name="image_url"
                onChange={handleChange}
              />
              <label htmlFor="">Add an image</label>
            </div>
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
                  value={foodd.food_name}
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
                value={foodd.description}
              ></textarea>
            </div>
          </div>

          <div className="tpp">
            <div className="food-n">
              <div className="op">
                <p className="tingss">Ingredients</p>
                <CKEditor
                  data={foodd?.ingredients}
                  className=""
                  name="ingredients"
                  value={foodd?.ingredients}
                  editor={ClassicEditor}
                  //   placeholder={}
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
                  data={foodd?.preparation}
                  name="preparation"
                  //   placeholder={}
                  value={foodd.preparation}
                  editor={ClassicEditor}
                  onChange={(e, editor) => {
                    handleP(e, editor);
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <input name="video_url" type="text" placeholder="Video-url" />
          </div>

          <button className="sb">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;
