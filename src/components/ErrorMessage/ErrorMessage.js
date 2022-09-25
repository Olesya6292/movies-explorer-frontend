import React from 'react';

import './ErrorMessage.css';

export default function ErrorMessage({ text }) {
  return <p className='error-message__text'>{text}</p>;
}
