function Navbar() {
  
  return(
    <nav className="site-nav grid">
      <h1>My Portfolio</h1>
      <ul onClick={(e: React.SyntheticEvent)=>{
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const id = target.getAttribute('href')?.replace('#','');
        const element = document.getElementById(String(id));
        if (String(id)=='welcome'){
          window.scroll({
            top:0,
            behavior: 'smooth'
          });
        }
        else{
          element?.scrollIntoView({
            behavior:'smooth'
          })
        }
  
      }}>
        <li><a href="#welcome">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar