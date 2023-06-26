import React from "react";
import "../../PagesComponent/DetailProduct.css";

function Else(props) {
  const list = [
    {
      icon: "/images/elseicon/store_mall_directory.svg",
      prop1: "Do’kon",
      prop2: "MacBro",
    },
    {
      icon: "/images/elseicon/delivery_dining.svg",
      prop1: "Yetkazib berish",
      prop2: "Bor",
      prop3: "30 000 so’m",
    },
    {
      icon: "/images/elseicon/360.svg",
      prop1: "Maxsulotni qaytarish va almashtirish",
      prop2: "15 kun",
      prop3: "Shartlar",
    },
  ];
  return (
    <div>
      <ul className="else">
        {list.map((value, index) => (
          <li key={index}>
            <img src={value.icon} alt="pic" />{" "}
            <span
              style={{
                marginRight: "10px",
                marginLeft: "10px",
                color: "#6C757D",
              }}
            >
              {value.prop1}
            </span>{" "}
            <span
              style={{
                marginRight: "10px",
                marginLeft: "10px",
                color: "#1E1E1E",
              }}
            >
              {value.prop2}
            </span>{" "}
            {value.prop3}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Else;
