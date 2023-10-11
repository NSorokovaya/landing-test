import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FaLongArrowAltRight } from 'react-icons/fa';
import style from './Hero.module.scss';

const Hero = () => {
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
    from: { background: 'rgba(85, 90, 90, 0.4)', y: '-150%', x: '-250%' },
    to: async (next, cancel) => {
      await next({ x: '250%' });
      await next({ y: '70%' });
      await next({ x: '-250%' });
      await next({ y: '-150%' });
    },
    loop: true,
  });
  return (
    <div className={style.hero}>
      <div className={style.heroText}>
        <animated.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 50,
            height: 50,
            borderRadius: 4,
            overflow: 'hidden',

            ...animatedStyle,
          }}
        />
        <animated.h2 style={fadeIn} className={style.heroTitle}>
          Our IT solutions in reliable hands
        </animated.h2>
        <animated.button
          onMouseEnter={() => setButtonProps({ transform: 'scale(1.05)' })}
          onMouseLeave={() => setButtonProps({ transform: 'scale(1)' })}
          style={{ ...buttonSpring, ...buttonProps }}
          className={style.heroButton}
        >
          Order
          <FaLongArrowAltRight />
        </animated.button>
      </div>
    </div>
  );
};

export default Hero;
