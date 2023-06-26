import React from "react";
import PropTypes from "prop-types";
import "../productFeature/CSS/headerCss/header.css";
DropDownLogin.propTypes = {};

function DropDownLogin(props) {
  const inforLogin = [
    {
      icon: "images/inforLogin/perm_identity.svg",
      props: "Personal information",
    },
    { icon: "/images/inforLogin/library_add_check.svg", props: "My orders" },
    { icon: "/images/inforLogin/favorite_border.svg", props: "Favorites" },
    { icon: "/images/inforLogin/place.svg", props: "Addresses" },
  ];
  return (
    <div className="dropDownInfor">
      <div className="dropDownInfor1">
        <h3>User-Name</h3>
        <p style={{ color: "red", cursor: "pointer" }}>Exit</p>
      </div>
      <div>
        <ul className="dropDownInfor2">
          {inforLogin.map((value, index) => (
            <div className="dropDownInfor3">
              <li key={index}>
                <img src={value.icon} alt="pic" />
                {value.props}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDownLogin;
