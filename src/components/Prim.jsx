import React from "react";
import "./Prim.css";
import { useState, useEffect } from "react";
import jollof from "../assets/Jollof.jpg";
import { useNavigate, useParams } from "react-router-dom";
import "./Prime.css";
import { FaArrowDown } from "react-icons/fa";
import axios from "axios";
import { TbGrillSpatula } from "react-icons/tb";
import FishRoll from "../assets/Fishroll.jpg";
import Meatpie from "../assets/Meatpie.jpg";
import background from "../assets/background.jpg";
import fish from "../assets/Fish.jpg";
import cocktail from "../assets/cocktail.jpg";
import eggs from "../assets/eggs.jpg";
import salad from "../assets/salad.jpg";
import pizza from "../assets/pizza.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

const Prim = ({ topting, heading }) => {
  const navigateTo = useNavigate();

  const id = useParams().id;
  const baseUrl = "https://recp-backend.onrender.com";

  const [foods, setFoods] = useState(null);
  const [more, setMore] = useState(false);

  const getAllRecipes = async () => {
    const response = await axios.get(`${baseUrl}/recipes`);
    setFoods(response?.data?.recipes);
    console.log(response);
  };

  const displayRemainder = () => {
    setMore(true);
  };

  const closeRemainder = () => {
    setMore(false);
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div className="prim-cc">
      <div className="hdd-ccont">
        <p className="hdd-p">{topting}</p>
      </div>

      <div className="prim-flexxy">
        <div>
          <span className="rated">{heading}</span>

          <div className="sec">
            {foods?.slice(0, 3).map((food) => (
              <div
                key={food}
                className="food"
                onClick={() => {
                  navigateTo(`/recipe-d/${food.id}`);
                }}
              >
                <div className="food-d">
                  <div className="ting">
                    <p className="f-name">{food.food_name}</p>
                    <div className="spatu">
                      {" "}
                      <span className="spatula">
                        <TbGrillSpatula />
                        <TbGrillSpatula />
                        <TbGrillSpatula />
                        <TbGrillSpatula />
                        <TbGrillSpatula className="fade" />
                      </span>
                    </div>
                  </div>
                  <div className="Auth">
                    <p className="Author">
                      {food.User.first_name} {food.User.last_name}
                    </p>
                  </div>
                </div>

                <div className="wrapper">
                  <img className="food-img" src={food.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="view-more">
          {more ? (
            <div className="remainder-cont">
              <div className="sec-m">
                {foods?.slice(3).map((food) => (
                  <div
                    key={food}
                    onClick={() => {
                      navigateTo(`/recipe-d/${food.id}`);
                    }}
                    className="food"
                  >
                    <div className="food-d">
                      <div className="ting">
                        <p className="f-name">{food.food_name}</p>
                        <div className="spatu">
                          {" "}
                          <span className="spatula">
                            <TbGrillSpatula />
                            <TbGrillSpatula />
                            <TbGrillSpatula />
                            <TbGrillSpatula />
                            <TbGrillSpatula className="fade" />
                          </span>
                        </div>
                      </div>
                      <div className="Auth">
                        <p className="Author">
                          {food.User.first_name} {food.User.last_name}
                        </p>
                      </div>
                    </div>

                    <div className="wrapper">
                      <img className="food-img" src={food.image} alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <span className="vw-cont-up" onClick={closeRemainder}>
                <FaArrowUp />
              </span>
            </div>
          ) : (
            <span onClick={displayRemainder} className="vw-cont">
              view more <FaArrowDown />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prim;
