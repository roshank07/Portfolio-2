import About from './components/About/About';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="">
    <Header/>
    <Nav/>
    {/* <About/> */}
    <Skills/>
    <Work/>
    <Projects/>
    <Education/>
    <Contacts/>
    </div>
  );
}

export default App;
