import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Button({variant, size, onClick, disabled, title, url}) {
  return (
    <>
      <Link to={url}>
        <button className={`${variant} ${size}`} onClick={onClick} disabled={disabled}>{title}</button>
      </Link>
    </>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  variant: 'primary',
  size: 'small',
  disabled: false,
  onClick: () => { },
  title: "I'm a Button"
}
