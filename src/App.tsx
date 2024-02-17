
import './App.css'
import me from "./assets/icons/me.jpg";

function App() {
  const stylito={
    fontWeight: 'bold'
  };
  return (
    <>
      <nav className="site-nav grid">
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Welcome */}
      <section id="welcome" className="grid">
        <div className="welcome-text">
          <h1>Cristiano</h1>
          <h4>Frontend Engineer junior</h4>
          <p className="leading">Hello, I am <span style={stylito}>Cristian Tinipuclla</span>, bachelor of Computer Science and Systems Engineering from USIL. Apart from Frontend knowledge, I have a B2 level of English. I am very communicative, proactive and I love challenges.</p>
          <a href="#portfolio" className="button">View my work</a>
        </div>
        <div className="welcome-img">
          <img src={me} alt="pic of me"/>
        </div> 
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <h3>Some of my projects</h3>
        <div className="projects grid">
          <a href="https://crisjhatin.github.io/paramore-web/" target="_blank" rel="noopener noreferrer">
            <img className="img-projects" src="assets/paramore.png" alt="Paramore web"/>
            <h4>Paramore web</h4>
          </a>
          <a href="https://github.com/crisjhatin/react-crud" target="_blank" rel="noopener noreferrer">
            <img className="img-projects" src="assets/react-crud.png" alt="ToDo React"/>
            <h4>React To-Do</h4>
          </a>
          <a href="https://crisjhatin.github.io/vanilla-js-apps/" target="_blank" rel="noopener noreferrer">
            <img className="img-projects"  src={"assets/vanilla-js.png"} alt="Vanilla JS apps"/>
            <h4>Vanilla JS apps</h4>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h3>These are my skills</h3>
        <ul className="grid">
          <li>
            <img src={"assets/javascript.svg"} alt=""/>
            <h4>Javascript</h4>
          </li>
          <li>
            <img src="assets/react.svg" alt=""/>
            <h4>React</h4>
          </li>
          <li>
            <img src="assets/sql.svg" alt=""/>
            <h4>SQL</h4>
          </li>
          <li>
            <img src="assets/c-sharp.svg" alt=""/>
            <h4>C#</h4>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact">
        <h3>Get in touch</h3>
        <p className="leading">Please, I'd appreciate if you fill the form in order to get in touch</p>
        <form action="">
          <input type="text" placeholder="NAME"/>
          <input type="email" placeholder="EMAIL"/>
          <textarea placeholder="YOUR MESSAGE"></textarea>
          <button className="button">Send message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="grid">
          <p className="copyright"> Copyright 2024 Cristian Tinipuclla</p>
          <ul className="social">
            <li><a href=""><img src="assets/icon_gh.svg" alt="github"/></a></li>
            <li><a href=""><img src="assets/icon_x.svg" alt="X"/></a></li>
            <li><a href=""><img src="assets/icon_lkd.svg" alt="LinkedIn"/></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
