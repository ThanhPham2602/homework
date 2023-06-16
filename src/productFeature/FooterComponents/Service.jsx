import React from "react";
import PropTypes from "prop-types";
import "../CSS/FooterCss/footer.css";
Service.propTypes = {};

function Service(props) {
  const list = [
    "Do’konlar",
    "Biz haqimizda",
    "Hamkorlik uchun",
    "Qaytarish",
    "Promokodlar",
  ];
  return (
    <div className="documents">
      <h3>Servis</h3>
      <ul className="documents__list">
        {list.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
