import React from 'react';
import { useState } from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({onChange}) {

  const [isChecked, setIsChecked] = useState(false);
 
  function onClickCheck() {
    const value = !isChecked;
    setIsChecked(value);
    onChange(value);
  };

  return (
        <div className="checkbox">
          <div className={`checkbox__body ${isChecked && 'checkbox__body_active' }`} onClick={onClickCheck}>
            <input id="checkbox" type="checkbox"/>
            <div className={`checkbox__indicator ${isChecked && 'checkbox__indicator_active' }`}/>
          </div>
          <label htmlFor="checkbox" className="checkbox__label">Короткометражки</label>
        </div>
  );
}

export default FilterCheckbox;
