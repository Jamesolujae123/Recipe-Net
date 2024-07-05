import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import brand from "../assets/brand-pic.png";
import logo from "../assets/logo.jpg";
import "./Nav.css";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import { AppContext, Welcome, Clicky, Mobile, UserL } from "../AppContext";
import prof from "../assets/Ellipse 38.png";
import { IoMdExit } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const myRef = useRef(null);

  const Mob = useContext(Mobile);
  const clicc = useContext(Clicky);
  const usr = useContext(UserL);

  const [logout, setLogout] = useState(false);
  const [drop, setDrop] = useState(false);
  const [search, setSearch] = useState(false);
  const [srcc, setSrcc] = useState(false);
  const [searchFor, setSearchFor] = useState("");

  const navigateTo = useNavigate();

  const clicked = () => {
    clicc.setIsCLicked(true);
    Mob.setIsMobile(true);
  };

  const unclicked = () => {
    Mob.setIsMobile(false);
    clicc.setIsCLicked(false);
  };

  const handleSearch = (e) => {
    setSearchFor(e.target.value);
  };

  const close = () => {
    Mob.setIsMobile(false);
    clicc.setIsCLicked(false);
  };

  const data = useContext(AppContext);
  const welc = useContext(Welcome);

  const loggout = () => {
    setLogout(true);
    setDrop(true);
  };

  const unLogout = () => {
    setLogout(false);
    setDrop(false);
  };

  const logoff = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_LastName");
    navigateTo("/");
  };

  const initiateSearch = () => {
    setSrcc(true);
    setSearch(true);
  };

  const clooss = () => {
    setLogout(false);
    setDrop(false);
  };

  const unSrcc = () => {
    setSrcc(false);
    setSearch(false);
  };

  // useEffect(() => {
  //   myRef.addEventListener("mouseover", handleOver);
  // }, []);

  return (
    <div className="nav-cont">
      <nav className="Navi-cont">
        <div className="left-cont">
          <div>
            {" "}
            <img className="brand" src={logo} alt="b-pic" />{" "}
          </div>
          <Link onClick={close} className="homee" to={"/"}>
            {" "}
            <div className="brand-d">
              <h2 className="Title">Recipe Net</h2>
              <p className="desc">An Encyclopedia of recipies</p>
            </div>
          </Link>
        </div>
        <div className={Mob.isMobile ? "Nav-links-mobile" : "Nav-links"}>
          <Link onClick={close} className="bro" to={"/"}>
            Home
          </Link>
          <Link onClick={close} className="bro" to={"/Recent"}>
            Recent recipe
          </Link>
          {data.isLoggedin ? (
            <Link onClick={close} className="bro" to={"/AddRecipe"}>
              Add recipe
            </Link>
          ) : (
            ""
          )}
          <Link onClick={close} className="bro" to={"/Blog"}>
            Blog
          </Link>
          <Link onClick={close} className="bro" to={"/ContactUs"}>
            Contact Us
          </Link>
          <Link onClick={close} className="bro" to={"/AboutUs"}>
            About
          </Link>
        </div>
        <div className="conti">
          <div className="right-cont">
            <span>
              {srcc ? (
                <Link className="rc-icon" onClick={unSrcc}>
                  <IoCloseSharp />
                </Link>
              ) : (
                <span className="rc-icon" onClick={initiateSearch}>
                  <IoMdSearch />
                </span>
              )}
            </span>
            <div className={search ? "search-cont" : "searchh"}>
              <span className="serccc">What delicacy are you craving for</span>
              <input
                className="search-tinn"
                type="search"
                onChange={handleSearch}
              />
            </div>
            {welc.welcome ? (
              <div
                ref={myRef}
                className="user"
                onMouseEnter={loggout}
                onMouseLeave={unLogout}
              >
                <div>
                  <img src={prof} alt="user" />
                </div>
                <div className="us-cont">
                  <span>
                    <div className="tinngg">
                      <div>Welcome</div>
                      {drop ? (
                        <Link onClick={clooss}>
                          <IoCloseSharp />
                        </Link>
                      ) : (
                        <FaCaretDown />
                      )}
                    </div>
                  </span>
                  <span className="us">{usr.userLN}</span>
                </div>
                <div className={logout ? "log-cont" : "logging"}>
                  <Link to={"/Me"} className="profile-l">
                    My Profile
                  </Link>
                  <Link className="log-i" onClick={logoff}>
                    Logout <IoMdExit className="exit-i-i" />
                  </Link>
                </div>
              </div>
            ) : (
              <Link id="sig" className="bro-1" to={"/signin"}>
                Signin
              </Link>
            )}
          </div>
          <div className="dddd">
            <a href="javascript:void(0)" className="dropdown">
              {clicc.isclicked ? (
                <IoCloseSharp onClick={unclicked} />
              ) : (
                <GiHamburgerMenu onClick={clicked} />
              )}
            </a>
            {/* <a href="#" className="x">
              <IoCloseSharp />
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
