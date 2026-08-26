import { VertBox } from '../../Components/Box'
import IntroParticles from '../../Components/IntroParticles'

export default function Intro() {
  return (
    <VertBox
      tag="section"
      className="intro-section items-center justify-center h-screen"
      gap="0px"
    >
      <IntroParticles />
      <div id="intro-title" className="intro-content">
        <h1 className="font-bold text-center">Daniel Mladek</h1>
        <h2 className="text-center">A Full Stack Developer</h2>
      </div>
    </VertBox>
  )
}
