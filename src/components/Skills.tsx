import javascript  from "../assets/img/javascript.svg";
import sql  from "../assets/img/sql.svg";
import c_sharp  from "../assets/img/c-sharp.svg";
import react  from "../assets/img/react.svg";

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
          <img src={c_sharp} alt=""/>
          <h4>C#</h4>
        </li>
      </ul>
    </section>

  )
}

export default Skills