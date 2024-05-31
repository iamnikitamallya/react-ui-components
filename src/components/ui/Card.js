import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";

export default function Card({
  textAlign,
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
          <Text variant="h5" title="I'm the Card Title" />
          <Text
            variant="para"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis."
          />
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
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  textAlign: "left",
  display: "block",
  objectFit: "contain",
  align: "",
  children: "",
};
