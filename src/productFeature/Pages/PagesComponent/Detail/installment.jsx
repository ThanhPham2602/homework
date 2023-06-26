import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../PagesComponent/DetailProduct.css";
import Months from "./months";
Installment.propTypes = {};

function Installment({ price }) {
  const list = [
    { id: 1, value: 3 },
    { id: 2, value: 6 },
    { id: 3, value: 12 },
    { id: 4, value: 15 },
    { id: 5, value: 18 },
  ];
  const initial = list[0];

  const [term, setTerm] = useState(initial.value);
  const [idCheck, setIdCheck] = useState(initial.id);

  useEffect(() => {}, []);

  const handleChange = (id) => {
    const index = list.findIndex((val) => val.id === id);
    const newTerm = list[index].value;
    // console.log("id: ", id);
    setIdCheck(id);
    setTerm(newTerm);

    // console.log("object 123", newTerm);
  };
  const paymentTerm = price / term;

  console.log("object price", typeof price);
  console.log("object term", typeof term);
  return (
    <div>
      <p className="payment">
        {paymentTerm} dollar x {term} months
      </p>
      <div
        style={{
          display: "flex",
          width: "500px",
          justifyContent: "space-between",
        }}
      >
        <Months onClick={handleChange} list={list} idCheck={idCheck} />
        <button className="savatga">+ Savatga</button>
      </div>
    </div>
  );
}

export default Installment;
