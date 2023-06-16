import React from "react";
import PropTypes from "prop-types";
import "../CSS/FooterCss/footer.css";

Document.propTypes = {};

function Document(props) {
  const list = ["Umumiy shartlar", "Ofertalar arxivi", "Nizom", "Guvohnoma"];

  return (
    <div className="documents">
      <h3>Hujjatlar</h3>
      <ul className="documents__list">
        {list.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ul>
    </div>
  );
}

export default Document;
