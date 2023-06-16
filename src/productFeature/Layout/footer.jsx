import React from "react";
import PropTypes from "prop-types";
import "../CSS/FooterCss/footer.css";
import Document from "../FooterComponents/Document";
import Service from "../FooterComponents/Service";
import Catalog from "../FooterComponents/Catalog";

footer.propTypes = {};

function footer(props) {
  return (
    <section className="Footer">
      <div className="Footer_litter">
        <div className="Footer__Upper">
          <div className="Documents">
            <Document className="documents" />
            <Service className="service" />
            <Catalog className="catalog" />
          </div>
          <div className="Contacts">dsad</div>
        </div>
        <div className="line"></div>
        <div className="Footer__Lower">
          <div> 2022 Nextstore.com </div>
          <div>Powered by </div>
        </div>
      </div>
    </section>
  );
}

export default footer;
