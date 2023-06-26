import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "./ImageGallery";
import "../productFeature/CSS/ContensCss/company.css";
company.propTypes = {};

function company(props) {
  const images = [
    "/images/company/image.png",
    "/images/company/image (1).png",
    "/images/company/image (2).png",
    "/images/company/image (3).png",
    "/images/company/image (4).png",
    "/images/company/image (5).png",
    "/images/company/image (6).png",
    "/images/company/image (7).png",
    "/images/company/image (8).png",
  ];
  return (
    <div className="company">
      <ImageGallery images={images} />
    </div>
  );
}

export default company;
