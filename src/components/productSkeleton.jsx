import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "antd";
import "../productFeature/CSS/ContensCss/Skeleton.css";

ProductSkeleton.propTypes = {
  length: PropTypes.number,
};
ProductSkeleton.defaultProps = {
  length: 5,
};

function ProductSkeleton({ length }) {
  return (
    <div className="SkeletonContainer">
      {Array.from(new Array(length)).map((x, index) => (
        <ul
          className="ProductSkeleton__ul"
          key={index}
          //  xs={12} sm={6} md={4} lg={3}
        >
          <li padding={1}>
            <Skeleton.Image width={100} height={100}></Skeleton.Image>
            <Skeleton width={50} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ProductSkeleton;
