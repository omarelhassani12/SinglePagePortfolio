import React, { useState } from 'react';
import Modal from 'react-modal';
import './work.css';
import './WorkDetailsModal.css';
import { allProjects } from './WorkData';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const projectsPerPage = 12;

function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1));
  };

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, filteredProjects.length);

  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <div id="work">
      <div className="projects-container">
        <h2>SOME THINGS I'VE BUILT</h2>
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
              <a href="#" onClick={() => handleOpenModal(project)}>
                <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="project-content">
                    <h3><a href={project.url}>{project.title}</a></h3>
                    <span className="category-tag">{project.category}</span>  
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        {Math.ceil(filteredProjects.length / projectsPerPage) > 1 && (
          <div className="pagination">
            <div>
              <span>Page {currentPage} from {Math.ceil(filteredProjects.length / projectsPerPage)}</span>
            </div>
            <div className="paginationButtons">
              <button onClick={handlePreviousPage} className={currentPage === 1 ? 'notAnyPage' : 'paginationButton'}>Back</button>
              <button onClick={handleNextPage} className={currentPage === Math.ceil(filteredProjects.length / projectsPerPage) ? 'notAnyPage' : 'paginationButton'}>Next</button>
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="modal-header">
          <h2>{selectedProject?.title}</h2>
          <div className="modal-icons">
            {selectedProject && (
              <>
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaExternalLinkAlt /> <span>View Project</span>
                </a>
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub /> <span>View GitHub</span>
                </a>
              </>
            )}
          </div>
          <button className="close-button" onClick={handleModalClose}><FaTimes /></button>
        </div>
        <div className="modal-body content-container">
          <div className="modal-left content">
            <div className="modal-top-half">
              <h4>About {selectedProject?.title}</h4>
              {selectedProject?.description && selectedProject.description.map((desc, index) => (
                <div key={index}>{desc}</div>
              ))}
            </div>
            <hr/>
            <div className="modal-bottom-half">
              <h4>Tools</h4>
              <div className="tools-list">
                {selectedProject?.tools && selectedProject.tools.map((tool, index) => (
                  <span key={index} className="tool" style={{ color: `#${Math.floor(Math.random()*16777215).toString(16)}`,marginRight: '10px' }}>
                    #{tool} 
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-right content">
            <div className="image-container">
              {selectedProject?.images &&
                <img src={selectedProject.images[selectedImageIndex]} alt={selectedProject?.title} />
              }
              <div className="navigation-buttons">
                {selectedProject?.images && selectedProject.images.length > 1 &&
                  <>
                    <a href='#' onClick={handlePreviousImage}>
                      <FaChevronLeft />
                    </a>
                    <a href='#' onClick={handleNextImage}>
                      <FaChevronRight />
                    </a>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Work;
