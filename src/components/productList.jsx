import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "antd";
import Product from "./product";
productList.propTypes = {
  length: PropTypes.object,
};
productList.defaultProps = {
  data: [],
};

function productList({ data }) {
  return (
    <div container>
      {data.map((product) => (
        <div item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <div padding={1}>
            <Product product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default productList;
