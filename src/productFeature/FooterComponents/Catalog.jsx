import React from "react";
import PropTypes from "prop-types";
import "../CSS/FooterCss/footer.css";
Catalog.propTypes = {};

function Catalog(props) {
  const list = [
    "Katalog 1",
    "Katalog 2",
    "Katalog 3",
    "Katalog 4",
    "Katalog 5",
  ];
  return (
    <div className="documents">
      <h3>Mahsulotlar katalogi</h3>
      <ul className="documents__list">
        {list.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
