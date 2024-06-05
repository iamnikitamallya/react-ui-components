import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";

export default function Card({
  textAlign = "initial",
  imgUrl,
  icon,
  display = "block",
  objectFit = "contain",
  align = "initial",
  children = "",
  title = "I'm the Card",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) {
  return (
    <>
      <div
        className={`card p-4 text-${textAlign} d-${display} align-items-${align} gap-3`}
      >
        {imgUrl ? (
          <img
            src={imgUrl}
            alt=""
            className={
              display === `flex` ? `object-${objectFit} w-50` : `mb-3 w-100`
            }
          />
        ) : (
          ""
        )}
        {icon}
        <div className={icon && display === "flex" ? "w-80" : ""}>
          <Text variant="h5" content={title ? title : children} />
          <Text variant="para" content={description ? description : children} />
          {/* <Button /> */}
          {children}
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  textAlign: PropTypes.oneOf(["initial", "left", "center", "right"]),
  display: PropTypes.oneOf(["flex", "block"]),
  objectFit: PropTypes.oneOf(["cover", "contain"]),
  align: PropTypes.oneOf(["initial", "center", "start", "end"]),
  //   children: PropTypes.node.isRequired
};
