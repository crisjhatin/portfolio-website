import me from "../assets/img/me.jpg";

function Welcome() {
  const stylito={
    fontWeight: 'bold'
  };

  return(
    <section id="welcome" className="grid">
      <div className="welcome-text">
        <h1>Cristian Tinipuclla</h1>
        <h4>Fullstack Engineer junior</h4>
        <p className="leading">Hello, I am <span style={stylito}>Cristian Tinipuclla</span>, bachelor of Computer Science and Systems Engineering from USIL. Apart from Fullstack knowledge, I have a B2 level of English. I am very communicative, proactive and I love challenges.</p>
        <button className="button" onClick={()=>{
          const element= document.getElementById('portfolio');
          element?.scrollIntoView({
            behavior: 'smooth'
          })
        }
        }>View my work</button>
      </div>
      <div className="welcome-img">
        <img src={me} alt="pic of me"/>
      </div> 
    </section>
)
}

export default Welcome