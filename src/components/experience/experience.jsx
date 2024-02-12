import React, { useState, useEffect } from 'react';
import './experience.css';
import ofpptImg from  '../../assets/companies/ofppt.png';
import CabinetMedImg from  '../../assets/companies/cabinet-medical.png';
import EstImg from  '../../assets/companies/EST-Safi.png';
import DevosoftImg from  '../../assets/companies/devosoft.png';

const skills = [
  { title: "Reactjs", path: "../../assets/skills/react.png" },
  { title: "Node.js", path: "../../assets/skills/node.png" },
  { title: "Flutter", path: "../../assets/skills/flutter.png" },
  { title: "MySQL", path: "../../assets/skills/mysql.png" },
  { title: "Firebase", path: "../../assets/skills/firebase.png" },
  { title: "PHP", path: "../../assets/skills/php.png" },
  { title: "Html", path: "../../assets/skills/html.png" },
  { title: "CSS", path: "../../assets/skills/css.png" },
  { title: "JavaScript", path: "../../assets/skills/js.png" },
  { title: "Java", path: "../../assets/skills/java.png" },
  { title: "jQuery", path: "../../assets/skills/jquery.png" },
  { title: "Socket.io", path: "../../assets/skills/socketio.png" },
  { title: "Bootstrap", path: "../../assets/skills/bootstrap.png" },
  { title: "GitHub", path: "../../assets/skills/github.png" },
  { title: "Git", path: "../../assets/skills/git.png" },
  { title: "Trello", path: "../../assets/skills/trello.png" },
  { title: "Jira", path: "../../assets/skills/jira.png" },
  { title: "Linux", path: "../../assets/skills/linux.png" }
];

const workplaces = [
  {
    id: 0,
    name: "OFPPT",
    url: "#",
    logo: ofpptImg,
    startDate: "2023-06-01",
    endDate: "2023-09-27",
    typeOfWork: "Freelancer",
  },
  {
    id: 1,
    name: "Medical Cabinet",
    url: "#",
    logo: CabinetMedImg,
    startDate: "2023-04-10",
    endDate: "2023-06-10",
    typeOfWork: "Internship",
  },
  {
    id: 2,
    name: "EST",
    url: "http://www.ests.uca.ma",
    logo: EstImg,
    startDate: "2022-12-25",
    endDate: "2023-04-27",
    typeOfWork: "Project development",
  },
  {
    id: 3,
    name: "Devosoft",
    url: "https://www.devosoft.ma",
    logo: DevosoftImg,
    startDate: "2022-07-04",
    endDate: "2022-08-04",
    typeOfWork: "Internship",
  },
];

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
                <div className="row" key={index}>
                  {skills.slice(index * skillsPerRow, (index + 1) * skillsPerRow).map(skill => (
                    <div className="skill-icon" key={skill.id}>
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
              {workplaces.map((workplace, index) => (
                  <div className={`timeline-item ${index === currentWorkplaceIndex ? 'active' : ''}`} key={workplace.id}>
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
