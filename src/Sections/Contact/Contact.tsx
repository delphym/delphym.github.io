import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { Box, VertBox } from '../../Components/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import CVBox from '../../Components/CVBox'

export default function Contact() {
  return (
    <VertBox
      tag="section"
      id="Contact"
      className="flex flex-col items-center"
      gap="20px"
    >
      <div className="content-width">
        <h2>Contact Me</h2>
      </div>
      <VertBox
        className="content-box content-width contact-box items-start"
        gap="15px"
      >
        <h3>Find me on the following platforms</h3>
        <ContactItem
          icon={faLinkedin}
          text="LinkedIn"
          link="https://www.linkedin.com/in/danielmladek/"
        />
        <ContactItem
          icon={faGithub}
          text="GitHub"
          link="https://github.com/delphym"
        />
        <ContactItem
          icon={faEnvelope}
          text="daniel.mladek.job(at)gmail(dot)com"
          link="mailto:daniel.mladek.job+GH(at)gmail(dot)com"
        />
        <CVBox />
      </VertBox>
    </VertBox>
  )
}

function ContactItem(props: {
  icon: IconDefinition
  text: string
  link: string
}) {
  return (
    <a href={props.link} target="_blank" className="contact-link">
      <Box className="items-center" gap="10px">
        <FontAwesomeIcon icon={props.icon} fontSize={'20px'} />
        <p className="text-[20px]">{props.text}</p>
      </Box>
    </a>
  )
}
