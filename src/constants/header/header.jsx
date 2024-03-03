// import React from 'react';
// import './header.css';
// import oeLogo from '../../assets/oe.ico';
// import scrollToSection from '../../utils/scrollUtils';

// function Header() {
//   return (
//     <div id="header">
//       <div className="logo">
//         <a href="/"><img src={oeLogo} alt="OE Logo" /></a>
//       </div>
//       <ul className='navbar'>
//         <li><a href="/" onClick={(e) => scrollToSection('about', e)}>About</a></li>
//         {/* <li><a href="/" onClick={(e) => scrollToSection('passion', e)}>Passion</a></li> */}
//         <li><a href="/" onClick={(e) => scrollToSection('experience', e)}>Experiences</a></li>
//         <li><a href="/" onClick={(e) => scrollToSection('work', e)}>Works</a></li>
//         <li><a href='/' id='hireMe' onClick={(e) => scrollToSection('footer', e)}>Hire me</a></li>
//       </ul>
//     </div>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import './header.css';
import oeLogo from '../../assets/oe.ico';
import scrollToSection from '../../utils/scrollUtils';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled. isOpen:', isOpen);
  };

  return (
    <div id="header">
      <div className="logo">
        <a href="/"><img src={oeLogo} alt="OE Logo" /></a>
      </div>
      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul>
          <li><a href="/" onClick={(e) => scrollToSection('about', e)}>About</a></li>
          {/* <li><a href="/" onClick={(e) => scrollToSection('passion', e)}>Passion</a></li> */}
          <li><a href="/" onClick={(e) => scrollToSection('experience', e)}>Experiences</a></li>
          <li><a href="/" onClick={(e) => scrollToSection('work', e)}>Works</a></li>
          <li><a href='/' id='hireMe' onClick={(e) => scrollToSection('footer', e)}>Hire me</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
