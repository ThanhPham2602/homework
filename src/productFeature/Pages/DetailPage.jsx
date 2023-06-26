import React from "react";
import PropTypes from "prop-types";
import Header from "../Layout/header";
import Footer from "../Layout/footer";
import DetailProduct from "./PagesComponent/DetailProduct";
import RelatedProducts from "./PagesComponent/relatedProducts";
import { useLoaderData } from "react-router-dom";
import DetailInfor from "./PagesComponent/DetailInfor";

function DetailPage() {
  const { productInfo } = useLoaderData();
  console.log("object pro", productInfo);
  return (
    <section
      style={{
        margin: "0 auto",
        backgroundColor: "#ECF4FF",
      }}
    >
      <Header />
      <div
        style={{
          maxWidth: "1230px",
          margin: "0 auto",
        }}
      >
        <DetailProduct productInfo={productInfo} />
        <RelatedProducts />
        <DetailInfor />
        <div>Recommendations</div>
      </div>
      <Footer />
    </section>
  );
}

export default DetailPage;
