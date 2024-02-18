import me from "../assets/img/me.jpg";

function Welcome() {
  const stylito={
    fontWeight: 'bold'
  };
  return(
    <section id="welcome" className="grid">
      <div className="welcome-text">
        <h1>Cristian Tinipuclla</h1>
        <h4>Frontend Engineer junior</h4>
        <p className="leading">Hello, I am <span style={stylito}>Cristian Tinipuclla</span>, bachelor of Computer Science and Systems Engineering from USIL. Apart from Frontend knowledge, I have a B2 level of English. I am very communicative, proactive and I love challenges.</p>
        <a href="#portfolio" className="button">View my work</a>
      </div>
      <div className="welcome-img">
        <img src={me} alt="pic of me"/>
      </div> 
    </section>
)
}

export default Welcome