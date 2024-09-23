import React from "react";

const Banner = ({ title, subtitle, backgroundImage }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
    height: "550px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
