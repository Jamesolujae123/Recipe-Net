import React, { useState } from "react";
import Prim from "../components/Prim";
import "./recentRecipe.css";
import axios from "axios";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";
import { TbGrillSpatula } from "react-icons/tb";
import Search from "./search";
import SecPrim from "../components/SecPrim";
import { useNavigate } from "react-router-dom";
import ThirdPrim from "../components/ThiredPrim";
import FourthPrim from "../components/FOurthPrim";

const Recent = () => {
  const token = localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchResultAvailable, setSearchResultAvailable] = useState(false);
  const baseUrl = "https://recp-backend.onrender.com";

  const userLastName = localStorage.getItem("user_lastName");

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  const navigateTo = useNavigate();

  const recipeQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const InitiateSearch = async (e) => {
    e.preventDefault();
    const searchRecipe = await axios.get(
      `${baseUrl}/recipes/search?query=${searchQuery}`
    );

    console.log(searchRecipe);

    if (searchRecipe.status === 200) {
      setSearchResult(searchRecipe?.data?.recipes);
      setSearchResultAvailable(true);
    }
    if (!searchQuery || searchQuery.length === 0) {
      setSearchResultAvailable(false);
    }
  };

  return (
    <div className="recipes-cont">
      <div className="recipy-container">
        <div className="f-option-cont">
          <span className="f-opt">Fish</span>
          <span className="f-opt">Eggs</span>
          <span className="f-opt">Cocktails</span>
          <span className="f-opt">salads</span>
          <span className="f-opt">Pizza</span>
        </div>

        <form onSubmit={InitiateSearch} className="recipe-search-cont">
          <input
            type="search"
            className="recipe-search"
            name="searchq"
            onChange={recipeQuery}
          />
          <button className="rep-search-button">Search</button>
        </form>
      </div>

      {searchResultAvailable ? (
        <div className="searchhe">
          <div className="recipeName">
            Showing {searchResult?.length} Search result(s) for {searchQuery}
          </div>
          <div className="searchArray">
            {searchResult?.map((Recipe) => (
              <div
                key={Recipe}
                className="food"
                onClick={() => {
                  navigateTo(`/recipe-d/${Recipe.id}`);
                  localStorage.setItem("recipeName", searchQuery);
                }}
              >
                <div className="food-d">
                  <div className="ting">
                    <p className="f-name">{Recipe.food_name}</p>
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
                      {Recipe.User.first_name} {Recipe.User.last_name}
                    </p>
                  </div>
                </div>
                <div className="wrapper">
                  <img className="food-img" src={Recipe.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Prim heading={"Trending"} />
          <SecPrim heading={"Baked dishes"} />
          <ThirdPrim heading={"New Arrival"} />
          <FourthPrim heading={"Rolls"} />
        </div>
      )}
    </div>
  );
};

export default Recent;
