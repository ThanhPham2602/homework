import React from "react";
import PropTypes from "prop-types";
import "./CSS/ads.css";

function SliceShow(props) {
  return (
    <div class="slideshow-container">
      <div class="mySlides fade">
        <img src="img1.jpg" alt="pic" />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <img src="img2.jpg" alt="pic" />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade">
        <img src="img3.jpg" alt="pic" />
        <div class="text">Caption Three</div>
      </div>
      <a class="prev" onclick="plusSlides(-1)">
        &#10094;
      </a>
      <a class="next" onclick="plusSlides(1)">
        &#10095;
      </a>
      <br />
      <div class="text-align">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
  );
}

export default SliceShow;
