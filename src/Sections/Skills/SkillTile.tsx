import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Box } from '../../Components/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  text: string
  icon?: IconDefinition | string
  size?: string
}

export default function SkillTile(props: Props) {
  return (
    <Box className="skill-brick items-center" gap="10px">
      {props.icon && typeof props.icon !== 'string' && (
        <FontAwesomeIcon
          icon={props.icon}
          className={`skill-brick-icon ${props.size ? '' : 'text-2xl'}`}
          style={{ fontSize: props.size }}
        />
      )}
      {typeof props.icon === 'string' && (
        <img
          src={props.icon}
          className={`skill-brick-img ${props.size ? '' : 'w-5'}`}
          style={{ width: props.size }}
        />
      )}
      <p className="skill-brick-text">{props.text}</p>
    </Box>
  )
}
