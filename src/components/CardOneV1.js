import React from 'react'
import Button from './ui/Button';

export default function CardOneV1() {
  return (
    <>
      <div className="card p-2">
        <h3>Lorem Ipsum</h3>
        <p className='pb-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button />
      </div>
    </>
  );
}
