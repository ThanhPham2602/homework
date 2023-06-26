import React from "react";
import PropTypes from "prop-types";
import "./DetailProduct.css";
import OthersPic from "./Detail/othersPic";
import Colors from "./Detail/colors";
import Installment from "./Detail/installment";
import BuyButtons from "./Detail/buyButtons";
import Else from "./Detail/else";
DetailProduct.propTypes = {};

function DetailProduct({ productInfo }) {
  console.log("object list", productInfo);
  return (
    <div className="outside">
      <div className="images">
        <OthersPic picList={productInfo.pic} />
      </div>
      <div className="info">
        <h2>{productInfo.name}</h2>
        <Colors colors={productInfo.color} />
        <h1>{`${productInfo.price} dollar`}</h1>
        <Installment price={productInfo.price} />
        <BuyButtons />
        <Else />
      </div>
    </div>
  );
}

export default DetailProduct;
