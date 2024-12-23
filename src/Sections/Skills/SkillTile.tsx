import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { Box } from "../../Components/Box"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props{
  text: string
  icon?: IconDefinition | string
  size?: string
}

export default function SkillTile(props: Props){
  return <Box className="skill-brick items-center" gap='10px'>
    {props.icon && typeof(props.icon) !== 'string' && <FontAwesomeIcon icon={props.icon} fontSize={props.size || '20px'}/>}
    {typeof(props.icon)==='string' && <img src={props.icon} width={props.size || '20px'}/>}
    <p style={{width: 'max-content'}}>{props.text}</p>
  </Box>
}