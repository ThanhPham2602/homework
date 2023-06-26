import React from "react";
// import PropTypes from "prop-types";
import "../CSS/headerCss/header.css";
import { Input } from "antd";
import DropDownLogin from "../../dropdown/DropDownLogin";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import logo from "../CSS/headerCss/NextLogo.jpg";

Header.propTypes = {};

function Header(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <header className="header">
      <div className="header2">
        <img className="logo" src={logo} alt="logo" />
        <div className="menuButton">Menu</div>
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <HeartOutlined className="add-fav" />
        <ShoppingCartOutlined className="cartHeader" />
        <button className="login">
          Login
          <div className="dropDownLogin">
            <DropDownLogin />
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
