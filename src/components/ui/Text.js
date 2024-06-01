import React from "react";
import PropTypes from "prop-types";

export default function Text({
  content,
  color,
  variant,
  weight,
  decoration,
  style,
  letterSpacing,
  align,
  transform,
  className
}) {
  return (
    <>
      <div
        className={`text-${color} ${variant} text-${align} text-${transform} fst-${style} fw-${weight} text-decoration-${decoration} ${className}`}
        style={{
          letterSpacing: `${letterSpacing}px`,
        }}
      >
        {content}
      </div>
    </>
  );
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "light",
    "dark",
    "white",
    "warning",
    "success",
    "danger",
    "info",
    "body",
    "muted",
    "black-50",
    "white-50",
  ]),
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "para"]),
  align: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "left",
    "right",
    "justify",
  ]),
  transform: PropTypes.oneOf(["lowercase", "uppercase", "capitalize", "none"]),
  style: PropTypes.oneOf(["normal", "italic"]),
  weight: PropTypes.oneOf(["bold", "bolder", "normal", "light", "lighter"]),
  decoration: PropTypes.oneOf(["underline", "line-through", "none"]),
  letterSpacing: PropTypes.oneOf(["0", "1", "2", "3", "4", "5"]),
  className: PropTypes.string,
};

Text.defaultProps = {
  color: 'body',
  variant: 'para',
  align: 'none',
  transform: 'none',
  style: 'normal',
  weight: 'none',
  decoration: 'none',
  letterSpacing: '0',
  content: "I'm the Content",
  className: ""
}