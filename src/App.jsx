import './App.css'
import Header from './constants/header/header'
import Home from './home'
import About from './components/about/about'
import Passion from './components/passion/passion'
import Experience from './components/experience/experience'
import Resume from './components/resume/resume'
import Work from './components/work/work'
import Contact from './components/contact/contact'

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <Home />
        <About />
        <Passion />
        <Experience />
        <Resume />
        <Work />
        <Contact />
      </div>
    </>
  )
}

export default App
