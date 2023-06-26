import React from "react";
import ReProduct from "./RelatedProducts/ReProducts";
import "./relatePro.css";
function RelatedProducts(props) {
  const list = [
    {
      pic: "/images/Rectangle 110.png",
      name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB ',
      brand: "MacBro",
      price: "15 232 332",
      status: "New",
    },
    {
      pic: "/images/Rectangle 110.png",
      name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB ',
      brand: "MacBro",
      price: "15 232 332",
      status: "New",
    },
    {
      pic: "/images/Rectangle 110.png",
      name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB ',
      brand: "MacBro",
      price: "15 232 332",
      status: "New",
    },
    {
      pic: "/images/Rectangle 110.png",
      name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB ',
      brand: "MacBro",
      price: "15 232 332",
      status: "New",
    },
    {
      pic: "/images/Rectangle 110.png",
      name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB ',
      brand: "MacBro",
      price: "15 232 332",
      status: "New",
    },
    {
      pic: "/images/Rectangle 110.png",
      name: 'Notebook Apple Macbook Pro 13" 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB ',
      brand: "MacBro",
      price: "15 232 332",
      status: "New",
    },
    {
      pic: "/images/Rectangle 110.png",
      name: 'Notebook Apple Macbook Pro 13"; 2.4 2019 Intel core i5  DDR3 8 GB SSD 256 GB ',
      brand: "MacBro",
      price: "15 232 332",
      status: "New",
    },
  ];

  return (
    <div className="outDiv">
      <div className="checkBox">
        <input type="checkbox" />
        <p style={{ marginLeft: "10px" }}>Arzon narxlardan boshlash</p>
      </div>
      <div>
        <ul className="relateProUl">
          {list.map((value, index) => (
            <li key={index}>
              <ReProduct relateProduct={value} />
              <div className="relateLine"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RelatedProducts;
