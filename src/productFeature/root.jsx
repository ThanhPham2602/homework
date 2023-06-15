import { useLoaderData, Form, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import ProductSkeleton from "../components/productSkeleton";
import ProductList from "../components/productList";
import SliceShow from "../components/ads";
import { useEffect, useState } from "react";

export default function Root() {
  const { Header, Footer, Content, Row } = Layout;
  const { list } = useLoaderData();
  const [loading, setLoading] = useState(true);
  console.log(" load 1", loading);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      <header>
        <img />
        <div>Menu</div>
        <div>
          <input />
          <button>icon</button>
        </div>
        <span>2</span>
        <span>?</span>
        <button></button>
      </header>
      <body>
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
      </body>
      <footer>Footer</footer>
    </Layout>
  );
}
