import React from "react";
import bannerImage from "../../assets/banner_img.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;
