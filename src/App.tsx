
import './App.css'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Welcome */} 
      <Welcome />

      {/* Portfolio */}
      <Portfolio />

      {/* Skills */}
      <Skills />
      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
