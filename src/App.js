
import Dashboard from '../src/components/dashboard'
import './App.css';
import Home from'../src/components/Home'
import Skills from './components/Skills';
import Projects from './components/projects';
import ProjectList from './ProjectsList'
import AboutMe from './components/about-me';
import ContactMe from './components/contact-me'
function App() {
  return (
    <div className='flex flex-wrap scroll-smooth gap-16 phone:gap-10'>
      <div className='fixed'>
      <Dashboard/>
      </div>
      {/* HOME */}
      <div id='home'>
      <Home/>
      </div>
      <div className='flex flex-col gap-28 ml-64 phone:ml-0'>
      
      {/* SKILLS */}
      <div id='skills'>
      <Skills/>
      </div >
      {/* PROJECTS */}
      <div id="projects"className='flex flex-col gap-16 phone:gap-10'>
      <div className='flex flex-col items-center gap-5 phone:gap-3'>
      <h1 className="text-5xl text-black  font-semibold text-center phone:text-2xl ">Projects</h1>
        <hr className='w-72 phone:w-48'/>
      </div>
      <div className='flex flex-wrap gap-10 ml-7 justify-center'>
      {ProjectList.map((project)=>{
        return(
        <Projects
          key={project.key}
          imgsrc={project.imgsrc}
          name={project.name}
          desc={project.desc}
          html={project.html}
        />
        )
      })}
      </div>
      </div>
      {/* ABOUTME */}
      <div id='aboutme'>
      <AboutMe/>
      </div>
      {/* CONTACTME */}
      <div id="contactme"className='flex flex-col'>
        <ContactMe/>
      </div>
      </div>

      
    </div>
  );
}

export default App;
