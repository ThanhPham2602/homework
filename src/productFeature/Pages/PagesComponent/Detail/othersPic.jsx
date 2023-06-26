import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../PagesComponent/DetailProduct.css";

OthersPic.propTypes = {};

function OthersPic({ picList }) {
  // console.log(" piclist", picList);
  const [ind, setInd] = useState(0);

  const handleChange = (index) => {
    const indexx = picList.findIndex((value, idex) => idex === index);
    setInd(indexx);
  };

  return (
    <div>
      <div className="mainPic">
        <img src={`${picList[ind]}`} alt="mainPic" className="mainPicBig" />
        <span className="mainPicIcon">
          <img src={"/images/detailproduct/Favorites.svg"} alt="icon" />
          <img src={"/images/detailproduct/Share.svg"} alt="icon" />
        </span>
      </div>
      <ul className="othersPic">
        {picList.map((val, index) => (
          <li key={index}>
            <div
              onClick={() => handleChange(index)}
              className={ind === index ? "picActivated" : "othersPic li div"}
            >
              <img src={val} alt={`pic ${index}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OthersPic;
