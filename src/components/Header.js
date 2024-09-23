import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar"; 
import Banner from "./Banner";
import bannerImage from "../assets/images/banner.png";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <>
      <AntHeader>
        <Navbar />
      </AntHeader>
      <Banner
        title="Welcome to the Doctor's Directory"
        subtitle="Find the best doctors near you"
        backgroundImage={bannerImage}
      />
    </>
  );
};

export default Header;
