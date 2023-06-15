import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <div>
      {product.name} {product.price}
    </div>
  );
}

export default Product;
