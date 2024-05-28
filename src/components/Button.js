import React from 'react'
import {Link} from 'react-router-dom'

export default function Button() {
  return (
    <>
      <Link to="/">
        <button>Know More</button>
      </Link>
    </>
  );
}
