import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactComponent as Logo } from '../../images/logo.svg';
import style from './Header.module.scss';

export const HeaderArea = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(-100%)' },
    delay: 500,
  });
  return (
    <div className={style.header}>
      <Logo width={150} />
      <div className={style.headerText}>
        <animated.h2 style={fadeIn}>
          Our IT solutions in reliable hands
        </animated.h2>
      </div>
    </div>
  );
};
