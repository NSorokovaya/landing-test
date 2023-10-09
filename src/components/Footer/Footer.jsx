import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='social-link'>
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='social-link'>
        <FaInstagram />
      </a>
      <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className='social-link'>
        <FaTelegram />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='social-link'>
        <FaLinkedin />
      </a>
      <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className='social-link'>
        <FaTiktok />
      </a>
    </div>
  );
};

export default Footer;