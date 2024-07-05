import React from "react";
import jollof from "../assets/Jollof.jpg";
import "./Prime.css";
import { TbGrillSpatula } from "react-icons/tb";
import FishRoll from "../assets/Fishroll.jpg";
import Meatpie from "../assets/Meatpie.jpg";
import background from "../assets/background.jpg";
import fish from "../assets/Fish.jpg";
import cocktail from "../assets/cocktail.jpg";
import eggs from "../assets/eggs.jpg";
import salad from "../assets/salad.jpg";
import pizza from "../assets/pizza.png";
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserL, User } from "../AppContext";
import "aos/dist/aos.css";
import axios from "axios";
import { FaArrowUp } from "react-icons/fa";

const Prime = () => {
  const navigateTo = useNavigate();

  const baseUrl = "https://recp-backend.onrender.com";

  const [foods, setFoods] = useState(null);
  const [more, setMore] = useState(false);

  const lastN = useContext(User);
  const usr = useContext(UserL);

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
    // AOS.init({
    //   offset: 200,
    //   duration: 1500,
    //   easing: "ease",
    //   startEvent: "load",
    // });

    getAllRecipes();
  }, []);

  return (
    <div className="req">
      <div className="intro">
        <div>
          <span className="acc">Get access to</span>
          <p className="acc">
            recipes for <em className="m-w">mouth watering</em> delicacies
          </p>
        </div>
        <div className="d-cont">
          {" "}
          <span className="acc-d">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            accusamus dolorem quam at
          </span>
        </div>

        <div className="info">
          <div className="info-highlighted">
            <p className="f-g-highlight">Fried Food</p>
            <p className="f-g-cont">Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="info-n">
            {" "}
            <p className="f-genre">Baked Delicacies</p>
            <p className="f-g-cont">Lorem ipsum dolor, sit amet consectetur</p>
          </div>
          <div className="info-n">
            {" "}
            <p className="f-genre">Steamed Food</p>
            <p className="f-g-cont">Lorem ipsum dolor, sit amet consectetur</p>
          </div>
        </div>
      </div>

      <div className="categ">
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic-fish" src={fish} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Fish</p>
          </div>
        </div>
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic" src={cocktail} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Cocktails</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={eggs} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Eggs</p>
          </div>{" "}
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={salad} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Salads</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={pizza} alt="" />
          </div>{" "}
          <div className="t-cont">
            <p className="catae-title">Pizza</p>
          </div>
        </div>
      </div>

      <div className="categ-r" data-aos="fade-right">
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic-fish" src={fish} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Fish</p>
          </div>
        </div>
        <div className="cate">
          <div className="img-c">
            <img className="cate-pic" src={cocktail} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Cocktails</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={eggs} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Eggs</p>
          </div>{" "}
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={salad} alt="" />
          </div>
          <div className="t-cont">
            <p className="catae-title">Salads</p>
          </div>
        </div>
        <div className="cate">
          {" "}
          <div className="img-c">
            <img className="cate-pic" src={pizza} alt="" />
          </div>{" "}
          <div className="t-cont">
            <p className="catae-title">Pizza</p>
          </div>
        </div>
      </div>

      <div className="slidding-div">
        <div>
          <div className="cont">
            <div className="first">
              <div>
                <span className="rated-p">Top Rated Recipes</span>
                <span className="day"> of the day</span>
              </div>
              <p className="text">
                Sliding recipes are much more tasty as food than sliding images
                :D
              </p>
            </div>
            <div className="sec">
              {foods?.slice(0, 3).map((food) => (
                <div
                  onClick={() => {
                    navigateTo(`/recipe-d/${food.id}`);
                  }}
                  key={food}
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
          </div>
        </div>
        <div className="view-more">
          {more ? (
            <div className="remainder-cont">
              <div className="sec-m">
                {foods?.slice(3).map((food) => (
                  <div
                    onClick={() => {
                      navigateTo(`/recipe-d/${food.id}`);
                    }}
                    key={food}
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

export default Prime;
