import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.links}>
      <a
        href="https://www.facebook.com/people/VNV-Solutions/100088433736254/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <FaFacebook className={style.img} />
      </a>
      <a
        href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <FaInstagram className={style.img} />
      </a>
      <a
        href="https://t.me/vnv_solutions"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <FaTelegram className={style.img} />
      </a>
      <a
        href="https://www.linkedin.com/company/vnv-tech/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <FaLinkedin className={style.img} />
      </a>
      <a
        href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <FaTiktok className={style.img} />
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
      </a>
    </div>
  );
};

export default Footer;
