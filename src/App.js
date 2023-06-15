import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./productFeature/root";
import ErrorPage from "./error-page";
// import { AppContext } from "./AppContext";
// import { useContext } from "react";

function App() {
  // const { list, dispatch } = useContext(AppContext);

  const productList = [
    { id: 0, name: "macbook", price: 300, descript: "abcdweqwe" },
    { id: 1, name: "macbook v1", price: 400, descript: "abcdweqw23e" },
    { id: 2, name: "macbook v2", price: 500, descript: "abcdweqw123213e" },
  ];

  const getProductList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ list: productList }));
    });
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: async () => getProductList(),
    },
    {
      path: "/:productId",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
