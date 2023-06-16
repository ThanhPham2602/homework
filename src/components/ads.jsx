import React from "react";
import PropTypes from "prop-types";
import "./CSS/ads.css";

function SliceShow(props) {
  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src={`https://picsum.photos/100/100`} alt="pic" />
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides fade">
        <img src={`https://picsum.photos/100/100`} alt="pic" />
        <div className="text">Caption Two</div>
      </div>

      <div className="mySlides fade">
        <img src={`https://picsum.photos/100/100`} alt="pic" />
        <div className="text">Caption Three</div>
      </div>
      <a className="prev" onclick={`plusSlides(-1)`}>
        &#10094;
      </a>
      <a className="next" onclick={`plusSlides(1)`}>
        &#10095;
      </a>
      <br />
      <div className="text-align">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
  );
}

export default SliceShow;
