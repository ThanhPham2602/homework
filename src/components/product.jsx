import React, { useState } from "react";
import PropTypes from "prop-types";
import TopSale from "./topSale";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const [isClicked, setIsClicked] = useState(true);
  console.log("object pro", product);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="ProductOver">
      <div className="ProductOver2">
        <div className="ProductUpper">
          <div className="ProductUpper2">
            <TopSale product={product} />
            {isClicked ? (
              <HeartOutlined className="FavProduct1" onClick={handleClick} />
            ) : (
              <HeartFilled className="FavProduct2" onClick={handleClick} />
            )}
          </div>
          <Link to={`product/${product.id}`}>
            <img
              className="img"
              src="/images/image 15.png"
              alt="pic"
              // style={{ width: "180px", height: "180px" }}
            />
          </Link>
        </div>

        <p style={{ color: "#0D63F3" }}>{product.price}</p>
        <p>{product.descript}</p>
        <p style={{ color: "#6C757D" }}>{product.order}</p>
        <div className="ProductLower">
          <button className="Purchase">Sotib olish</button>
          <ShoppingCartOutlined className="cartProduct" />
        </div>
      </div>
    </div>
  );
}

export default Product;
