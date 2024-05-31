import React, { Children } from "react";
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
  children,
}) {
  return (
    <>
      <div
        className={`card p-4 text-${textAlign} d-${display} align-items-${align} gap-3`}
      >
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={title}
            className={
              display === `flex` ? `object-${objectFit} w-50` : `mb-3 w-100`
            }
          />
        ) : (
          ""
        )}
        {icon}
        <div className={icon && display === "flex" ? "w-80" : ""}>
          <h5>{title}</h5>
          <p>{description}</p>
          {/* <Button /> */}
          {children}
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  textAlign: PropTypes.oneOf(["center", "right"]),
  display: PropTypes.oneOf(["flex", "block"]),
  objectFit: PropTypes.oneOf(["cover", "contain"]),
  align: PropTypes.oneOf(["center", "start", "end"]),
  //   children: PropTypes.node.isRequired
};

Card.defaultProps = {
  title: "I'm a Card Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  textAlign: "left",
  display: "block",
  objectFit: "contain",
  align: "",
  children: "",
};
