import React, { useState, useEffect } from 'react';
import './experience.css';
import workplaces from './workplaces';
import skills from './skills';


function Experience() {
  const [skillImages, setSkillImages] = useState({});

  useEffect(() => {
    Promise.all(
      skills.map(skill => import(/* @vite-ignore */ `${skill.path}`).then(image => ({ [skill.title]: image.default })))
    ).then(images => {
      const imageObject = Object.assign({}, ...images);
      setSkillImages(imageObject);
    });
  }, []);

  const skillsPerRow = 6;

  const [currentWorkplaceIndex, setCurrentWorkplaceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkplaceIndex(prevIndex => (prevIndex + 1) % workplaces.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="experience">
      <div className="container">
        <div className="top-container">
          <h2>EXPERIENCES</h2>
          <p>I've specialized in mobile development for 2 years and web development for about 3 years. I'm committed to continuous learning in this dynamic industry.</p>
        </div>
        <div className="bottom-container">
          <div className="left-side">
            <h3>Some technologies I've worked with:</h3>
            {Array.from({ length: Math.ceil(skills.length / skillsPerRow) }, (_, index) => (
              <div className="row" key={`row-${index}`}>
                {skills.slice(index * skillsPerRow, (index + 1) * skillsPerRow).map((skill, skillIndex) => (
                  <div className="skill-icon" key={`skill-${index}-${skillIndex}`}>
                    <img src={skillImages[skill.title]} alt={skill.title} />
                  </div>
                ))}
              </div>
            ))}

          </div>
          <div className="right-side">
            <div className="text-center places-worked">
              <h3>Where I've Worked:</h3>
              <div className="timeline">
              {workplaces.map(workplace => (
                <div className={`timeline-item ${workplace.id === currentWorkplaceIndex ? 'active' : ''}`} key={`workplace-${workplace.id}`}>
                    <a href={workplace.url} target="_blank">
                      <img src={workplace.logo} alt={workplace.name} />
                    </a>
                    <div className="description">
                      <p>{workplace.startDate} | {workplace.endDate}</p>
                      <p>{workplace.typeOfWork}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
