import javascript  from "../assets/img/javascript.svg";
import sql  from "../assets/img/sql.svg";
import python  from "../assets/img/python.svg";
import react  from "../assets/img/react.svg";
import spring_boot from "../assets/img/spring-boot.svg"
import git from "../assets/img/git.svg"

function Skills() {
  
  return(
    <section id="skills">
      <h3>These are my skills</h3>
      <ul className="grid">
        <li>
          <img src={javascript} alt=""/>
          <h4>Javascript</h4>
        </li>
        <li>
          <img src={react} alt=""/>
          <h4>React</h4>
        </li>
        <li>
          <img src={sql} alt=""/>
          <h4>SQL</h4>
        </li>
        <li>
          <img src={spring_boot} alt=""/>
          <h4>Java/Spring Boot</h4>
        </li>
        <li>
          <img src={python} alt=""/>
          <h4>Python</h4>
        </li>
        <li>
          <img src={git} alt=""/>
          <h4>Git/Github</h4>
        </li>
        
      </ul>
    </section>

  )
}

export default Skills