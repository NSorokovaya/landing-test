import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { FaLongArrowAltRight } from 'react-icons/fa';
import style from './Header.module.scss';

export const HeaderArea = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(-100%)' },
    delay: 500,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.molasses,
    delay: 800,
  });

  const [buttonProps, setButtonProps] = useSpring(() => ({
    transform: 'scale(1)',
  }));

  return (
    <div className={style.header}>
      <Logo width={150} />
      <div className={style.headerText}>
        <animated.h2 style={fadeIn} className={style.headerTitle}>
          Our IT solutions in reliable hands
        </animated.h2>
        <animated.button
          onMouseEnter={() => setButtonProps({ transform: 'scale(1.05)' })}
          onMouseLeave={() => setButtonProps({ transform: 'scale(1)' })}
          style={{ ...buttonSpring, ...buttonProps }}
          className={style.headerButton}
        >
          Order
          <FaLongArrowAltRight />
        </animated.button>
      </div>
    </div>
  );
};
