import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import style from './Header.module.scss';

const Header = () => {
  const navItems = [
    { text: 'Why Us?', link: '#whyus' },
    { text: 'Service', link: 'service' },
    { text: 'Portfolio', link: '#portfolio' },
    { text: 'Contact Us', link: '#contact' },
    { text: 'FAQ', link: '#faq' },
  ];

  return (
    <div className={style.headerContainer}>
      <a href="/landing-test/" className={style.logoLink}>
        <Logo className={style.logo} />
      </a>
      <nav className={style.nav}>
        <ul className={style.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={style.navItem}>
              <a href={item.link} className={style.navLink}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
