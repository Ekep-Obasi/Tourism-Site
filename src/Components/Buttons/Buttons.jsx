/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.css';

function Buttons({ title, color }) {
  return (
    <button
      className="tourism-site__button"
      type="button"
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
}

export default Buttons;
