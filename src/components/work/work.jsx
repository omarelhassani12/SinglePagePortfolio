// import React, { useState } from 'react';
// import './work.css'; // Make sure to import CSS file
// import { allProjects } from './WorkData'; 

// const projectsPerPage = 12;

// function Work() {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);

//   // Function to handle going to the previous page
//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Function to handle going to the next page
//   const handleNextPage = () => {
//     const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Filter projects based on the selected category
//   const filteredProjects = activeFilter === 'All'
//     ? allProjects
//     : allProjects.filter(project => project.category === activeFilter);

//   // Calculate start and end indexes for pagination
//   const startIndex = (currentPage - 1) * projectsPerPage;
//   const endIndex = Math.min(startIndex + projectsPerPage, filteredProjects.length);

//   // Displayed projects based on pagination
//   const displayedProjects = filteredProjects.slice(startIndex, endIndex);

//   return (
//     <div id="work">
//       <div className="projects-container">
//         <div className="filter-container">
//           <select 
//             id="filter-select"
//             onChange={(e) => setActiveFilter(e.target.value)}
//             value={activeFilter}
//           >
//             <option value="All">All</option>
//             <option value="Web">Web</option>
//             <option value="Mobile">Mobile</option>
//             <option value="Design">Design</option>
//           </select>
//         </div>

//         <div className="projects-list">
//           {displayedProjects.map((project, index) => (
//             <div key={index} className="project-card">
//               <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}></div>
//               <div className="project-content">
//                 <h3><a href={project.url}>{project.title}</a></h3>
//                 <span className="category-tag">{project.category}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="pagination">
//           <div>
//             <span>Page {currentPage} from {Math.ceil(filteredProjects.length / projectsPerPage)}</span>
//           </div>
//           <div className="paginationButtons">
//             <button onClick={handlePreviousPage} className={currentPage === 1 ? 'notAnyPage' : 'paginationButton'}>Back</button>
//             <button onClick={handleNextPage} className={currentPage === Math.ceil(filteredProjects.length / projectsPerPage) ? 'notAnyPage' : 'paginationButton'}>Next</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Work;



import React, { useState } from 'react';
import './work.css'; // Make sure to import CSS file
import { allProjects } from './WorkData'; 

const projectsPerPage = 12;

function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle going to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle going to the next page
  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to open the modal and set the selected project
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Filter projects based on the selected category
  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  // Calculate start and end indexes for pagination
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, filteredProjects.length);

  // Displayed projects based on pagination
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <div id="work">
      <div className="projects-container">
        <div className="filter-container">
          <select 
            id="filter-select"
            onChange={(e) => setActiveFilter(e.target.value)}
            value={activeFilter}
          >
            <option value="All">All</option>
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
            <option value="Design">Design</option>
          </select>
        </div>

        <div className="projects-list">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-background" style={{ backgroundImage: `url(${project.image})` }} onClick={() => handleOpenModal(project)}></div>
              <div className="project-content">
                <h3><a href={project.url}>{project.title}</a></h3>
                <span className="category-tag">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <div>
            <span>Page {currentPage} from {Math.ceil(filteredProjects.length / projectsPerPage)}</span>
          </div>
          <div className="paginationButtons">
            <button onClick={handlePreviousPage} className={currentPage === 1 ? 'notAnyPage' : 'paginationButton'}>Back</button>
            <button onClick={handleNextPage} className={currentPage === Math.ceil(filteredProjects.length / projectsPerPage) ? 'notAnyPage' : 'paginationButton'}>Next</button>
          </div>
        </div>
        
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <a href={selectedProject.url}>Visit Project</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
