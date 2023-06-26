import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import ProductSkeleton from "../../components/productSkeleton";
import ProductList from "../../components/productList";
import SliceShow from "../../components/ads";
import Category from "../../components/category";
import SliceShow2 from "../../components/ads2";
import Company from "../../components/company";

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
    <div
      style={{
        maxWidth: "1230px",
        backgroundColor: "#ECF4FF",
        margin: "0 auto",
      }}
    >
      <SliceShow className="SlideShow" />
      <Category className="Categori" />
      <div>{loading ? <ProductSkeleton /> : <ProductList data={list} />}</div>
      <SliceShow2 className="SlideShow" />
      <div>{loading ? <ProductSkeleton /> : <ProductList data={list} />}</div>
      <Company />
      <SliceShow2 className="SlideShow" />
    </div>
  );
}

export default Contents;
