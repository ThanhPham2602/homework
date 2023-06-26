import React from "react";

import "../CSS/FooterCss/footer.css";

Contact.propTypes = {};

function Contact(props) {
  const listContact = [
    "/images/Contact/Facebook - Original.svg",
    "/images/Contact/Instagram - Original.svg",
    "/images/Contact/Telegram - Original.svg",
    "/images/Contact/TikTok - Original.svg",
  ];
  return (
    <div>
      <h3>Axbarot xizmati</h3>
      <p>contact.@nextstore.uz</p>
      <p>+998 97 712 96 96</p>
      <p>+998 95 503 09 09</p>
      <p>Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</p>
      <div>
        <ul className="Contacts__icon">
          {listContact.map((contact, index) => (
            <li key={index}>
              <img
                src={contact}
                alt={`pic ${index + 1}`}
                style={{ height: "42px", width: "42px" }}
              />
            </li>
          ))}
          {/* <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTiktok} />
            </a> */}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
