import React, { useState } from "react";
import PropTypes from "prop-types";

DropdownHover.propTypes = {};

function DropdownHover() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    isOpen && (
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        123
      </div>
    )
  );
}

export default DropdownHover;
