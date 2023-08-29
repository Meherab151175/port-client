
import './App.css'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Home from './pages/Home'
import About from './pages/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
