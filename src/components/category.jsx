import React from "react";
import PropTypes from "prop-types";
// import "../components/CSS/category.css/";
import "../productFeature/CSS/ContensCss/category.css";
category.propTypes = {};
category.defaultProps = {
  length: 8,
};

function category(props) {
  const categoryList = [
    {
      // image: "../components/CSS/category.css/mage 6 (1).png",
      image: "/images/category/image 6 (1).png",
      name: "Smartfonlar",
    },
    {
      image: "images/category/image 6 (2).png",
      name: "Kompyuterlar va notebooklar",
    },
    {
      image: "images/category/image 6 (3).png",
      name: "Televizorlar",
    },
    {
      image: "images/category/image 6 (4).png",
      name: "Aqlli soatlar",
    },
    {
      image: "images/category/image 6 (5).png",
      name: "Quloqchinlar",
    },
    {
      image: "images/category/image 6 (6).png",
      name: "Konditsioner",
    },
    {
      image: "images/category/image 6 (7).png",
      name: "Sovutkichlar",
    },
    {
      image: "images/category/image 6 (8).png",
      name: "Kir yuvish mashinalari",
    },
  ];
  return (
    <div className="Category">
      <ul className="Category__ul">
        {categoryList.map((value, index) => (
          <li key={index}>
            <div className="Category__Li">
              <img
                src={value.image}
                alt="pic"
                width={"136px"}
                height={"136px"}
                // style={{
                //   maxWidth: "100%",
                //   maxHeight: "100%",
                //   objectFit: "cover",
                // }}
              />
              {/* {console.log("object p:", value)} */}
              <p>{value.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default category;
