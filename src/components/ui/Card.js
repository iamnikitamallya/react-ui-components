import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

export default function Card({
  textAlign,
  title,
  description,
  imgUrl,
  icon,
  display,
  objectFit,
  align,
}) {
  return (
    <>
      <div
        className={`card p-2 text-${textAlign} d-${display} align-items-${align} gap-3`}
      >
        <img
          src={imgUrl}
          alt={title}
          className={display === `flex` ? `object-${objectFit} w-50` : `mb-3 w-100`}
        />
        {icon}
        <div className={display === `flex` ? `w-50` : `w-100`}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button />
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  textAlign: PropTypes.oneOf(["center", "right"]),
  display: PropTypes.oneOf(["flex", "block"]),
    objectFit: PropTypes.oneOf(["cover", "contain"]),
  align: PropTypes.oneOf(["center", "start", "end"])
};

Card.defaultProps = {
  title: "I'm a Card Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  textAlign: "left",
  display: "block",
    objectFit: "contain",
  align: ""
};
