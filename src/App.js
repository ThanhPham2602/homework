import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./productFeature/root";
import ErrorPage from "./error-page";
import DetailPage from "./productFeature/Pages/DetailPage";
// import { AppContext } from "./AppContext";
// import { useContext } from "react";

function App() {
  // const { list, dispatch } = useContext(AppContext);

  const productList = [
    {
      id: 0,
      name: "Notebook Apple Macbok Pro 13” 2.3 2019 Intel core i5 DDR3 8GB 256 GB",
      price: 300,
      descript: "abcdweqwe",
      order: 12,
      color: ["red", "yellow", "black", "white"],
      pic: [
        "/images/detailproduct/image 19.png",
        "/images/detailproduct/image 19 (1).png",
        "/images/detailproduct/image 19 (2).png",
        "/images/detailproduct/image 19 (3).png",
      ],
    },
    {
      id: 1,
      name: "Notebook Apple Macbok Pro 13” 2.3 2019 Intel core i5 DDR3 8GB 256 GB",
      price: 400,
      descript: "abcdweqw23e",
      order: 13,
      status: "Top Sale",
      color: ["red", "yellow", "black", "white"],
      pic: [
        "/images/detailproduct/image 19.png",
        "/images/detailproduct/image 19 (1).png",
        "/images/detailproduct/image 19 (2).png",
        "/images/detailproduct/image 19 (3).png",
      ],
    },
    {
      id: 2,
      name: "Notebook Apple Macbok Pro 13” 2.3 2019 Intel core i5 DDR3 8GB 256 GB",
      price: 500,
      descript: "abcdweqw123213e",
      order: 14,
      color: ["red", "yellow", "black", "white"],
      pic: [
        "/images/detailproduct/image 19.png",
        "/images/detailproduct/image 19 (1).png",
        "/images/detailproduct/image 19 (2).png",
        "/images/detailproduct/image 19 (3).png",
      ],
    },
    {
      id: 3,
      name: "Notebook Apple Macbok Pro 13” 2.3 2019 Intel core i5 DDR3 8GB 256 GB",
      price: 500,
      descript: "abcdweqw123213e",
      order: 14,
      status: "Top Sale",
      color: ["red", "yellow", "black", "white"],
      pic: [
        "/images/detailproduct/image 19.png",
        "/images/detailproduct/image 19 (1).png",
        "/images/detailproduct/image 19 (2).png",
        "/images/detailproduct/image 19 (3).png",
      ],
    },
    {
      id: 4,
      name: "macbook v2",
      price: 500,
      descript: "abcdweqw123213e",
      order: 14,
      status: "New",
      color: ["red", "yellow", "black", "white"],
      pic: [
        "/images/detailproduct/image 19.png",
        "/images/detailproduct/image 19 (1).png",
        "/images/detailproduct/image 19 (2).png",
        "/images/detailproduct/image 19 (3).png",
      ],
    },
  ];

  const getProductList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ list: productList }));
    });
  };
  const loadProductInfo = (demo) => {
    console.log(" demo", demo);

    const index = productList.findIndex(
      (value) => parseFloat(demo.params.productId) === value.id
    );
    console.log("object ind", index);
    // return setTimeout(() => ({ productInfo: productList[index] }));
    return { productInfo: productList[index] };
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: async () => getProductList(),
    },
    {
      path: "product/:productId",
      element: <DetailPage />,
      loader: loadProductInfo,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
