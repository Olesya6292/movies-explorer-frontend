import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChange }) {
  return (
    <label htmlFor='checkbox' className='checkbox__label'>
      <input
        id='checkbox'
        type='checkbox'
        className='checkbox'
        checked={checked}
        onChange={onChange}
      ></input>
      <span className='checkbox__body'>
        <span className='checkbox__circle'></span>
      </span>
      <span className='checkbox__title'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
