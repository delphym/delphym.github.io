import './styles/output.css'
import Navigation from './Components/Navigation/Navigation'
import About from './Sections/About/About'
import Contact from './Sections/Contact/Contact'
import Intro from './Sections/Intro/Intro'
import Projects from './Sections/Projects/Projects'
import Skills from './Sections/Skills/Skills'

function App() {
  return (
    <>
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
