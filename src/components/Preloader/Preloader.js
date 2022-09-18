import React from 'react';
import './Preloader.css';

const Preloader = ({ isActive }) => {
  return (
    <div className='preloader'>
      {isActive && (
        <div className='preloader__container'>
          <span className='preloader__round' />
        </div>
      )}
    </div>
  );
};

export default Preloader;
