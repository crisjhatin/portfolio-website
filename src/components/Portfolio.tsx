import paramore from "../assets/img/paramore.png";
import react_crud from "../assets/img/react-crud.png";
import vanilla_js from "../assets/img/vanilla-js.png";

function Portfolio() {
  
  return(
    <section id="portfolio">
      <h3>Some of my projects</h3>
      <div className="projects grid">
        <a href="https://crisjhatin.github.io/paramore-web/" target="_blank" rel="noopener noreferrer">
          <img className="img-projects" src={paramore} alt="Paramore web"/>
          <h4>Paramore web</h4>
        </a>
        <a href="https://github.com/crisjhatin/react-crud" target="_blank" rel="noopener noreferrer">
          <img className="img-projects" src={react_crud} alt="ToDo React"/>
          <h4>React To-Do</h4>
        </a>
        <a href="https://crisjhatin.github.io/vanilla-js-apps/" target="_blank" rel="noopener noreferrer">
          <img className="img-projects"  src={vanilla_js} alt="Vanilla JS apps"/>
          <h4>Vanilla JS apps</h4>
        </a>
      </div>
    </section>
  )
}

export default Portfolio