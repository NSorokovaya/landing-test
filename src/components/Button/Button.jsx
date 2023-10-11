//only for sections Button

import React from 'react';
import { useSpring, animated } from 'react-spring';
import style from './Button.module.scss';

const Button = ({ text, onClick }) => {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
  }));

  return (
    <animated.button
      className={style.button}
      onClick={onClick}
      onMouseEnter={() => set({ transform: 'scale(1.05)' })}
      onMouseLeave={() => set({ transform: 'scale(1)' })}
      style={props}
    >
      {text}
    </animated.button>
  );
};

export default Button;
