import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Title from '../Title/Title';
import style from './WhyUs.module.scss';
import Button from 'components/Button/Button';

const WhyUs = () => {
  const Advantages = [
    {
      title: 'Extensive Expertise',
      text: 'We boast a team of professionals with a wealth of experience and knowledge in diverse domains, allowing to tackle a wide range of projects with confidence and precision.',
    },
    {
      title: 'Client-Centered Approach',
      text: 'We place a strong emphasis on understanding and meeting the unique needs of each client. ',
    },
    {
      title: 'Innovative Solutions',
      text: 'We are known for innovative approach to problem-solving. We consistently deliver cutting-edge solutions that drive tangible results.',
    },
    {
      title: 'Proven Track Record',
      text: 'With a portfolio of successful projects and satisfied clients, we have established a solid track record of delivering high-quality work.',
    },
    {
      title: 'Effective Communication',
      text: ' You can expect clear and timely updates throughout the project lifecycle, ensuring that everyone is on the same page and well-informed.',
    },
    {
      title: 'Commitment to Quality',
      text: 'We maintain a stringent commitment to delivering work of the highest quality.',
    },
  ];

  const [hoveredTitle, setHoveredTitle] = useState(null);

  const fadeInTitle = useSpring({
    opacity: hoveredTitle ? 0 : 1,
  });

  const fadeInText = useSpring({
    opacity: hoveredTitle ? 1 : 0,
  });

  return (
    <div className={style.advantages} id="whyus">
      <Title text="Why Us?" />
      <ul className={style.advantagesList}>
        {Advantages.map((advantage, index) => (
          <li
            key={index}
            className={style.advantagesItem}
            onMouseEnter={() => setHoveredTitle(advantage.title)}
            onMouseLeave={() => setHoveredTitle(null)}
          >
            <animated.p style={fadeInTitle} className={style.advantagesTitle}>
              {advantage.title}
            </animated.p>
            {hoveredTitle === advantage.title && (
              <animated.div
                style={fadeInText}
                className={style.advantagesText}
                dangerouslySetInnerHTML={{ __html: advantage.text }}
              />
            )}
          </li>
        ))}
      </ul>
      <Button text="Order now!" />
    </div>
  );
};
export default WhyUs;
