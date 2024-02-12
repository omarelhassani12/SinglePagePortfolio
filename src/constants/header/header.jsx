import React from 'react';
import './header.css';
import oeLogo from '../../assets/oe.ico';
import scrollToSection from '../../utils/scrollUtils';

function Header() {
  return (
    <div id="header">
      <div className="logo">
        <a href="/"><img src={oeLogo} alt="OE Logo" /></a>
      </div>
      <ul className='navbar'>
        <li><a href="/" onClick={(e) => scrollToSection('about', e)}>About</a></li>
        <li><a href="/" onClick={(e) => scrollToSection('passion', e)}>Passion</a></li>
        <li><a href="/" onClick={(e) => scrollToSection('experience', e)}>Experiences</a></li>
        <li><a href="/" onClick={(e) => scrollToSection('work', e)}>Works</a></li>
        <li><a href='/' id='hireMe' onClick={(e) => scrollToSection('contact', e)}>Hire me</a></li>
      </ul>
    </div>
  );
}

export default Header;
