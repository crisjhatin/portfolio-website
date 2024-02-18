import icon_gh  from "../assets/img/icon_gh.svg";
import icon_x  from "../assets/img/icon_x.svg";
import icon_lkd  from "../assets/img/icon_lkd.svg";


function Footer() {
  
  return(
    <footer>
      <div className="grid">
        <p className="copyright"> Copyright 2024 Cristian Tinipuclla</p>
        <ul className="social">
          <li><a href=""><img src={icon_gh} alt="github"/></a></li>
          <li><a href=""><img src={icon_x} alt="X"/></a></li>
          <li><a href=""><img src={icon_lkd} alt="LinkedIn"/></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer