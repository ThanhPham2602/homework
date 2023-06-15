import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "antd";

ProductSkeleton.propTypes = {
  length: PropTypes.number,
};
ProductSkeleton.defaultProps = {
  length: 3,
};

function ProductSkeleton({ length }) {
  return (
    <div container>
      {Array.from(new Array(length)).map((x, index) => (
        <div
          item
          key={index}
          //  xs={12} sm={6} md={4} lg={3}
        >
          <div padding={1}>
            <Skeleton.Image width={100} height={100}></Skeleton.Image>
            <Skeleton width={50} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSkeleton;
