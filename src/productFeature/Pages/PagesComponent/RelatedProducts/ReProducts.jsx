import React from "react";
import PropTypes from "prop-types";
import "../relatePro.css";
ReProduct.propTypes = {
  relateProduct: PropTypes.object,
};
ReProduct.defaultProps = {
  length: 5,
};

function ReProduct({ relateProduct }) {
  // console.log(" relate", relateProduct);
  return (
    <div className="relateProductLi">
      <img
        src={relateProduct.pic}
        alt="
      pic"
      />
      <span>{relateProduct.name}</span>
      <span>{relateProduct.brand}</span>
      <span>{relateProduct.price}</span>
      <span>{relateProduct.status}</span>
      <button>Do’kondan ko’rish</button>
    </div>
  );
}

export default ReProduct;
