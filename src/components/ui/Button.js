import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Button({variant, size, onClick, disabled, title, url, icon}) {
  return (
    <>
      <Link to={url}>
        <button className={`btn btn-${variant} btn-${size}`} onClick={onClick} disabled={disabled}>{title} {icon}</button>
      </Link>
    </>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark', 'success', 'danger', 'warning']),
  size: PropTypes.oneOf(['sm', 'lg']),
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
