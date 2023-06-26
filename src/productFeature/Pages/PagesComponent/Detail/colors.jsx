import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../PagesComponent/DetailProduct.css";

Colors.propTypes = {};

function Colors({ colors }) {
  // console.log("object color", colors);
  // const [color, setColor] = useState(colors[0]);

  const [ind, setInd] = useState(0);
  const handleChange = (index) => {
    const ind = colors.findIndex((val, inde) => inde === index);
    console.log("object ind", index);
    // const newColor = colors[ind];

    setInd(ind);
    // console.log("object clor", newColor);
  };

  return (
    <div className="colors">
      <p>Colors</p>
      <ul className="colors--ul">
        {colors.map((value, index) => (
          <li key={index} style={{ backgroundColor: `${value}` }}>
            <div
              onClick={() => handleChange(index)}
              style={{ height: "100%" }}
              className={ind === index ? "colorsActived" : "colors--ul li"}
            >
              {console.log("object vlae", value)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
