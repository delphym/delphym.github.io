import { Box, VertBox } from '../../Components/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import {
  faCss,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faJava,
  faJenkins,
  faDocker,
  faAws,
  faGithub,
  faGitlab,
  faApple,
  faWindows,
  faLinux,
} from '@fortawesome/free-brands-svg-icons'
import SkillTile from './SkillTile'

export default function Skills() {
  return (
    <VertBox
      tag="section"
      id="Skills"
      className="flex flex-col items-center"
      gap="20px"
    >
      <div className="content-width">
        <h2 id="About">Skills</h2>
      </div>
      <div className="content-box content-width section-box skills-box">
        <FontAwesomeIcon
          icon={faCode}
          fontSize={'100px'}
          color="rgb(235, 186, 52)"
        />
        <VertBox gap="10px">
          <h3>I have experience working with the following</h3>
          <Box className="skills-tiles" gap="10px">
            <SkillTile icon={faHtml5} text="HTML" />
            <SkillTile icon={faCss} text="CSS" />
            <SkillTile icon={faJs} text="JavaScript" />
            <SkillTile
              icon={'/images/typescript-svgrepo-com.svg'}
              text="TypeScript"
            />
            <SkillTile icon={faReact} text="React" />
            <SkillTile icon={faNodeJs} text="NodeJS" />
            <SkillTile icon={faJava} text="Java" />
            <SkillTile icon={'/images/spring-3.svg'} text="Spring" />
            <SkillTile icon={faDatabase} text="SQL" />
            <SkillTile icon={'/images/git-icon.svg'} text="Git" />
            <SkillTile icon={faGithub} text="GitHub" />
            <SkillTile icon={faGitlab} text="GitLab" />
            <SkillTile icon={faJenkins} text="Jenkins" />
            <SkillTile icon={faDocker} text="Docker" />
            <SkillTile icon={faAws} text="AWS" />
            <SkillTile icon={'/images/azure-1.svg'} text="Azure" />
            <SkillTile icon={faApple} text="macOS" />
            <SkillTile icon={faWindows} text="Windows OS" />
            <SkillTile icon={faLinux} text="Linux OS" />
          </Box>
          <h4>Other skills</h4>
          <ul className="list-disc list-inside">
            <li>Problem Solving</li>
            <li>Troubleshooting and debugging errors</li>
            <li>Ability to learn and grow from feedback</li>
          </ul>
        </VertBox>
      </div>
    </VertBox>
  )
}
