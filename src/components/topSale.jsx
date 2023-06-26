import React, { useState } from "react";
import PropTypes from "prop-types";
import "../productFeature/CSS/ContensCss/productList.css";
TopSale.propTypes = {};

function TopSale({ product }) {
  let Color = "";

  switch (product.status) {
    case "Top Sale":
      Color = "#FF0101";
      break;
    case "New":
      Color = "#EB8528";
      break;

    default:
      Color = "";
      break;
  }
  const divStyle = {
    backgroundColor: Color,
  };
  return (
    <div className="TopSale" style={divStyle}>
      {product.status}
    </div>
  );
}

export default TopSale;
