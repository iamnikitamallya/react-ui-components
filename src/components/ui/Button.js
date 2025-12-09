import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({
  variant = "primary",
  size = "small",
  onClick = () => {},
  disabled = false,
  title = "I'm a Button",
  url,
  rtIcon,
  ltIcon,
  bRadius = "2",
}) {
  return (
    <div>
      <Link to={url}>
        <button
          className={`btn btn-${variant} btn-${size} rounded-${bRadius} ${
            rtIcon ? "rtIcon" : ""
          } ${ltIcon ? "ltIcon" : ""}`}
          onClick={onClick}
          disabled={disabled}
        >
          {ltIcon} {""}
          {title} {""}
          {rtIcon}
        </button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "outline-primary",
    "secondary",
    "outline-secondary",
    "light",
    "outline-light",
    "dark",
    "outline-dark",
    "success",
    "outline-success",
    "danger",
    "outline-danger",
    "warning",
    "outline-warning",
    "info",
    "outline-info",
    "link",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  bRadius: PropTypes.oneOf(["0", "1,", "2", "3", "4", "5"]),
};

export default Button;
