import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import  style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.links}>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaFacebook className={style.img}/>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaInstagram className={style.img}/>
      </a>
      <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaTelegram className={style.img} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaLinkedin className={style.img} />
      </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaTiktok className={style.img} />
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
      </a>
    </div>
  );
};

export default Footer;