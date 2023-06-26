import React from "react";
import PropTypes from "prop-types";
// import { Skeleton } from "antd";
import Product from "./product";
import "../productFeature/CSS/ContensCss/productList.css";
productList.propTypes = {
  length: PropTypes.object,
};
productList.defaultProps = {
  data: [],
};

function productList({ data }) {
  return (
    <div>
      <ul className="productList__ul">
        {data.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default productList;
