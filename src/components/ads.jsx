import React from "react";
// import PropTypes from "prop-types";
import "./CSS/ads.css";
import { Slide } from "react-slideshow-image/";
import "react-slideshow-image/dist/styles.css";

function SliceShow(props) {
  const images = [
    "/images/ads1.png",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[0]})`,
            width: "1230px",
            height: "380px",
          }}
        ></div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[1]})`,
            width: "1230px",
            height: "380px",
          }}
        ></div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[2]})`,
            width: "1230px",
            height: "380px",
          }}
        ></div>
      </div>
    </Slide>
  );
}

//   return (

//     <div className="slideshow-container">
//       <div className="mySlides fade">
//         <img src={`https://picsum.photos/100/100`} alt="pic" />
//         <div className="text">Caption Text</div>
//       </div>

//       <div className="mySlides fade">
//         <img src={`https://picsum.photos/100/100`} alt="pic" />
//         <div className="text">Caption Two</div>
//       </div>

//       <div className="mySlides fade">
//         <img src={`https://picsum.photos/100/100`} alt="pic" />
//         <div className="text">Caption Three</div>
//       </div>
//       <a className="prev" onclick={`plusSlides(-1)`}>
//         &#10094;
//       </a>
//       <a className="next" onclick={`plusSlides(1)`}>
//         &#10095;
//       </a>
//       <br />
//       <div className="text-align">
//         <span className="dot" onclick="currentSlide(1)"></span>
//         <span className="dot" onclick="currentSlide(2)"></span>
//         <span className="dot" onclick="currentSlide(3)"></span>
//       </div>
//     </div>
//   );
// }

export default SliceShow;
