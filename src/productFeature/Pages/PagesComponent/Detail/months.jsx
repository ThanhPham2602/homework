import React from "react";
import PropTypes from "prop-types";
import "../../PagesComponent/DetailProduct.css";
Months.propTypes = {};

function Months({ onClick, list, idCheck }) {
  console.log("idcheck", idCheck);
  return (
    <div className="months">
      <ul className="monthsUl">
        {list.map((value, ind) => (
          <li key={ind}>
            <div
              className={
                value.id === idCheck ? "monthsActived" : "monthsUnActive"
              }
              onClick={() => {
                onClick(value.id);
                // {
                //   console.log("click", value.id);
                // }
              }}
              //   id={ids + value.id}
            >
              {console.log(value.id)}
              {console.log(idCheck)}
              {console.log(value.id === idCheck)}
              {value.id === idCheck ? `${value.value} yodo` : value.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Months;
