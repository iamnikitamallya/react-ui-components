  import React from "react";
  import { Link } from "react-router-dom";
  import PropTypes from "prop-types";

  export default function Button({
    variant,
    size,
    onClick,
    disabled,
    title,
    url,
    rtIcon,
    ltIcon,
    bRadius,
  }) {
    return (
      <>
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
      </>
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
    bRadius: PropTypes.oneOf(['0', '1,', '2', '3', '4', '5']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    url: PropTypes.elementType,
    ltIcon: PropTypes.elementType,
    rtIcon: PropTypes.elementType
  };

  Button.defaultProps = {
    variant: "primary",
    size: "small",
    disabled: false,
    onClick: () => {},
    title: "I'm a Button",
    url: "/",
    bRadius: '2',
  };
