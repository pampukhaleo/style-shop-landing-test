import React from 'react';

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="menu-right">
        <ul>
          <li><a href="/" className="menu-link">Головна</a></li>
          <li><a href="/" className="menu-link">Експертизи</a></li>
          <li><a href="/" className="menu-link">Наші Ціни</a></li>
          <li><a href="/" className="menu-link">Контакти</a></li>
          <li><a href="/" className="menu-link">Про Нас</a></li>
        </ul>
        <div className="menu-left">
          <a href="/" className="logo">Your Logo</a>
        </div>
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <a href="/" className="contact-us">Contact Us</a>
      </div>
    </div>
  );
};

export default TopMenu;
