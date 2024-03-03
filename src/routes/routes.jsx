import React from 'react';
import Home from '../home';
import About from '../components/about/about';
import Experience from '../components/experience/experience';
import Resume from '../components/resume/resume';
import Work from '../components/work/work';

function AppRoutes() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Resume />
      <Work />
    </div>
  );
}

export default AppRoutes;
