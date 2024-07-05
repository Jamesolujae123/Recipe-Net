import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Recent from "./pages/recentRecipe";
import Recipe from "./pages/Recipe-details";
import AddRecipe from "./pages/SubmitRecipe";
import Search from "./pages/search";
import Sigin from "./pages/sigin";
import SignUp from "./pages/SignUp";
import EditBP from "./pages/EditBP";
import Profile from "./pages/myProfile";
import { useState, createContext, useContext } from "react";
import {
  AppContext,
  Welcome,
  Clicky,
  Mobile,
  User,
  UserOptions,
  UserL,
} from "./AppContext";
import axios from "axios";
import { Toaster } from "sonner";
import Blogd from "./pages/Blogd";
import AddBlog from "./pages/AddBlog";
import EditRecipe from "./pages/EditRecipe";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [isclicked, setIsCLicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [options, setOptions] = useState(false);
  const [user, setUser] = useState("");
  const [userLN, setUserLN] = useState("");

  return (
    <AppContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      <Welcome.Provider value={{ welcome, setWelcome }}>
        <User.Provider value={{ user, setUser }}>
          <UserL.Provider value={{ userLN, setUserLN }}>
            <UserOptions.Provider value={{ options, setOptions }}>
              <Clicky.Provider value={{ isclicked, setIsCLicked }}>
                <Mobile.Provider value={{ isMobile, setIsMobile }}>
                  <Nav />
                </Mobile.Provider>
              </Clicky.Provider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Recent" element={<Recent />} />
                <Route path="/AddRecipe" element={<AddRecipe />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/addToBlog" element={<AddBlog />} />
                <Route path="/Blog-cont/:id" element={<Blogd />} />
                <Route path="/EditB/:id" element={<EditBP />} />
                <Route path="/ContactUs" element={<Contact />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/signin" element={<Sigin />} />
                <Route path="/Sign-up" element={<SignUp />} />
                <Route path="/recipe-d/:id" element={<Recipe />} />
                <Route path="/EditR/:id" element={<EditRecipe />} />
                <Route path="/Me" element={<Profile />} />
              </Routes>
              <Footer />
            </UserOptions.Provider>
          </UserL.Provider>
        </User.Provider>
      </Welcome.Provider>
    </AppContext.Provider>
  );
}

export default App;
