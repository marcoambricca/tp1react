import './App.css';
import NavBar from './components/navbar/navbar.jsx';
import TopSection from './components/top-section/topsection.jsx';
import AboutMe from './components/aboutme/aboutme.jsx';
import Services from './components/services/services.jsx'
import Education from './components/education/education.jsx';

function App(){
  return (
    <>
      <NavBar />
      <TopSection />
      <AboutMe />
      <Services />
      <Education />
    </>
  )
}

export default App;