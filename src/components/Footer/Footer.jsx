import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import  style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.links}>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaInstagram />
      </a>
      <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaTelegram />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaLinkedin />
      </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className={style.link}>
        <FaTiktok />
      </a>
    </div>
  );
};

export default Footer;