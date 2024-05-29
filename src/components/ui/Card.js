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
}) {
  return (
    <>
      <div className={`card p-2 ${textAlign} ${display}`}>
        <div>
          <img src={imgUrl} alt={title} />
          {icon}
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button title='Know More'/>
        </div>
      </div>
    </>
  );
}
