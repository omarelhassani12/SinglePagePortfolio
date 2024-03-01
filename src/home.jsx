import React, { useState, useEffect } from 'react';
import './home.css';
import scrollToSection from './utils/scrollUtils';

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [hoveredLetters, setHoveredLetters] = useState([]);

  const words = [' Web developer', ' Mobile developer', ' UX/UI designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const nextIndex = prevText.length + 1;
        const currentWord = words[currentWordIndex];
        if (nextIndex <= currentWord.length) {
          return currentWord.slice(0, nextIndex);
        } else {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); 
          return '';
        }
      });
    }, 100); 

    return () => clearInterval(interval);
  }, [currentWordIndex, words]);

  const handleHover = (index) => {
    setHoveredLetters((prevLetters) => [...prevLetters, index]);
  };

  const handleLeave = () => {
    setHoveredLetters([]);
  };

  return (
    <div id="home">
      <div className="top-home">
        <h4>
        I'm a   
          {currentText.split('').map((letter, index) => (
            <span
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
              style={{ color: hoveredLetters.includes(index) ? '#64ffda' : '#fff' }}
            >
              {letter}
            </span>
          ))}
        </h4>
        <h4>
        </h4>
      </div>
      <ul className='bottom-home'>
        <a href='#' onClick={(e) => scrollToSection('work', e)}>My projects</a>
      </ul>
    </div>
  );
}

export default Home;
