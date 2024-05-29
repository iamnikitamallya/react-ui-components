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
      <div className={`card p-2 text-${textAlign} d-${display}`}>
          <img src={imgUrl} alt={title} />
          {icon}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button />
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
    textAlign: PropTypes.oneOf(['center', 'right']),
    display: PropTypes.oneOf(['flex', 'block'])
}

Card.defaultProps = {
    title: "I'm a Card Title",
    description: "Write something about me please!",
    textAlign: 'left',
    display: 'flex'
}
