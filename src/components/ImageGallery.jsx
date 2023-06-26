import React from "react";
import PropTypes from "prop-types";

ImageGallery.propTypes = {};

function ImageGallery({ images }) {
  return (
    <div className="imageGallery">
      {images.map((image, index) => (
        <div className="imageItem">
          <img
            key={index}
            src={image}
            alt={`pic ${index + 1}`}
            style={{ height: "90px", width: "90px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
