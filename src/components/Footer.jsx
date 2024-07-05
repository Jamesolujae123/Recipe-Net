import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-f">
        <div className="left-ting">
          <div className="tin-cont">
            <div>
              <h2 className="Title-w">Recipe Net</h2>
              <p className="des">An Encyclopedia of recipies</p>
            </div>
            <div className="secc"> </div>
          </div>
          <div>
            <p className="f-ting">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati laudantium dolor harum porro dolores libero temporibus
              soluta adipisci ipsum sunt illo eos veniam atque minus facilis,
              accusantium reprehenderit aliquid praesentium?
            </p>
          </div>
          <div>
            <button className="Read">Read More</button>
          </div>
        </div>
        <div className="middle-ting"></div>
        <div className="right-ting"></div>
      </div>

      <div className="bottom">
        <div>
          <span className="copy">
            Copyright © 2024 Recipe Net. All Right Reserved
          </span>
        </div>
        <div className="by-cont">
          <span className="by">
            <FaFacebookF />
          </span>
          <span className="by">
            <FaTwitter />
          </span>
          <span className="by">
            <IoLogoGoogleplus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
