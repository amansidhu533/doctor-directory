import React from "react";
import { Menu } from "antd";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"><img src={logo} alt=""/></div>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Doctors</Menu.Item>
        <Menu.Item key="3">Contact Us</Menu.Item>
      </Menu> */}
    </div>
  );
};

export default Navbar;
