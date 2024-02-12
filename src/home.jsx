import { useState } from 'react';
import './home.css';
import scrollToSection from './utils/scrollUtils';

function Home() {
  const [hoveredLetterH1, setHoveredLetterH1] = useState(null);
  const [hoveredLetterH4, setHoveredLetterH4] = useState(null);

  const handleHoverH1 = (index) => {
    setHoveredLetterH1(index);
  };

  const handleHoverH4 = (index) => {
    setHoveredLetterH4(index);
  };

  const handleLeave = () => {
    setHoveredLetterH1(null);
    setHoveredLetterH4(null);
  };

  const textH1 = "HEY, I'M Omar";
  const lettersH1 = textH1.split('');

  const textH4 = "I'm a Mobile, Web developer & UX/UI designer";
  const lettersH4 = textH4.split('');

  return (
    <div id="home">
      <div className="top-home">
        <h1>
          {lettersH1.map((letter, index) => (
            <span
              key={index}
              onMouseEnter={() => handleHoverH1(index)}
              onMouseLeave={handleLeave}
              style={{ color: hoveredLetterH1 === index ? '#64ffda' : '#fff' }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <h4>
          {lettersH4.map((letter, index) => (
            <span
              key={index}
              onMouseEnter={() => handleHoverH4(index)}
              onMouseLeave={handleLeave}
              style={{ color: hoveredLetterH4 === index ? '#64ffda' : '#fff' }}
            >
              {letter}
            </span>
          ))}
        </h4>
      </div>
      <ul className='bottom-home'>
        <a href='#' onClick={(e) => scrollToSection('work', e)}>My projects</a>
      </ul>
    </div>
  );
}

export default Home;
