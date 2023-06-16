import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductSkeleton from "../../components/productSkeleton";
import ProductList from "../../components/productList";
import SliceShow from "../../components/ads";

Contents.propTypes = {};

function Contents({ list }) {
  const [loading, setLoading] = useState(true);
  console.log(" load 1", loading);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {/* <SliceShow /> */}

      <div>categori</div>
      <div>
        {/* {list.length ? (
            <ul>
              {list.map((product) => (
                <li key={product.id}>
                  <Link to={`/${product.id}`}>
                    {product.name ? <>{product.name}</> : <i>No Name</i>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No product</i>
            </p>
          )} */}
        {loading ? <ProductSkeleton /> : <ProductList data={list} />}
      </div>
      <div>slice show abs</div>
      <div>product</div>
      <div>company</div>
      <div>slice show abs</div>
    </div>
  );
}

export default Contents;
