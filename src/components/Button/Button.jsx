import React from 'react';
import style from './Button.module.scss';

const Button = ({ text, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
