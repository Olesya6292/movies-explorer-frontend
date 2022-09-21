import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({checked, onChange}) {

  return (
    <label>
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={onChange}
    ></input>
    <span className="checkbox__body">
      <span className="checkbox__circle"></span>
    </span>
    <span className="checkbox__label">Короткометражки</span>
  </label>
  );
}

export default FilterCheckbox;
