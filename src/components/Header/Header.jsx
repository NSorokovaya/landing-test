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

  const animatedStyle = useSpring({
    from: { background: '#ff6d6d', y: -200, x: 0 },
    to: async (next, cancel) => {
      await next({ x: 1300, background: '#fff59a' });
      await next({ y: 400, background: '#88DFAB' });
      await next({ x: 100, background: '#569AFF' });
      await next({ y: -200, background: '#ff6d6d' });
    },
    loop: true,
  });
  return (
    <animated.div className={style.header}>
      <Logo width={150} />
      <div className={style.headerText}>
        <animated.div
          style={{
            width: 100,
            height: 100,
            borderRadius: 4,
            ...animatedStyle,
          }}
        />
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
    </animated.div>
  );
};
