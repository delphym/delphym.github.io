import './styles/main.css'
import Navigation from './Components/Navigation/Navigation'
import About from './Sections/About/About'
import Intro from './Sections/Intro/Intro'
import Projects from './Sections/Projects/Projects'
import Skills from './Sections/Skills/Skills'
import Outro from './Sections/Outro/Outro'

function App() {
  return (
    <>
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Outro />
    </>
  )
}

export default App
