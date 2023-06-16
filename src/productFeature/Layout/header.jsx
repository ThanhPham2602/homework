import React, { useState } from "react";
import PropTypes from "prop-types";
import "../CSS/headerCss/header.css";
import { Button, Input } from "antd";
import HeartOutlined from "@ant-design/icons";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import logo from "../CSS/headerCss/NextLogo.jpg";

Header.propTypes = {};

function Header(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="menuButton">Menu</div>
      <div className="search">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <button
        className="add-fav"
        onClick={() => handleClick()}
        color={isClicked ? "red" : "#ECF4FF"}
      >
        {isClicked ? AiFillHeart : AiOutlineHeart}
      </button>
      <button className="cart">
        {/* <HeartOutlined className="cart" /> */}
        ??
      </button>
      <button className="login">Login</button>
    </header>
  );
}

export default Header;
