import React from "react";
import PropTypes from "prop-types";
import "../CSS/FooterCss/footer.css";
import Document from "../FooterComponents/Document";
import Service from "../FooterComponents/Service";
import Catalog from "../FooterComponents/Catalog";
import Contact from "../FooterComponents/Contact";
import "../../App.css";
footer.propTypes = {};

function footer(props) {
  return (
    <section className="Footer">
      <section className="Footer2">
        <div className="Footer__Upper">
          <div className="Documents">
            <Document className="documents" />
            <Service className="service" />
            <Catalog className="catalog" />
          </div>
          <Contact className="Contacts" />
        </div>
        <div>
          <div className="line"></div>
          <div className="Footer__Lower">
            <div> 2022 Nextstore.com </div>
            <div>Powered by </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default footer;
