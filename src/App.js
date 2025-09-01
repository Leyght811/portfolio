
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { useRef, useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (refName) => {
    let targetRef = null
    switch (refName) {
      case "Home":
        targetRef = homeRef;
        break;
      case "About":
        targetRef = aboutRef;
        break;
      case "Skills":
        targetRef = skillsRef;
        break;
      case "Projects":
        targetRef = projectsRef;
        break;
      case "Contact":
        targetRef = contactRef
    }
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <div className="App">
      <Navbar scrollTo={scrollTo} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Content homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} currentPage={currentPage} />
      
    </div>
  );
}

export default App;
