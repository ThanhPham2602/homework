import { useLoaderData } from "react-router-dom";
// import { Layout, Space, Typography } from "antd";

import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Contents from "./Layout/contents";

export default function Root() {
  const { list } = useLoaderData();

  return (
    <section style={{ margin: "0 auto", backgroundColor: "#ECF4FF" }}>
      <Header />
      <Contents list={list} />
      <Footer />
    </section>
  );
}
