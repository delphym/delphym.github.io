import { XMarkIcon } from '@heroicons/react/24/solid'
import SkillTile from '../Skills/SkillTile'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
interface ProjectCardFloatingProps {
  project: typeof import('../../data/projects.json')[0] | null
  iconsMap: Record<string, IconDefinition | string>
  isOpen: boolean
  onClose: () => void
}

const ProjectCardFloating: React.FC<ProjectCardFloatingProps> = ({
  project,
  iconsMap,
  isOpen,
  onClose,
}) => {
  if (!project) return null

  return (
    <div
      // Toggle CSS class .open if isOpen === true
      className={`project-card-floating-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose} // click outside => close
    >
      {/*
        We use onClick at the overlay level to close when user clicks outside
        the floating card (optional approach).
      */}
      <div
        className="project-card-floating"
        onClick={(e) => e.stopPropagation()}
        /*
           Stop propagation so that clicking inside the card
           doesn't trigger the overlay’s onClick
        */
      >
        {/* <div className="lightbox">
      <div className="lightbox-content">
        <XMarkIcon
          className="w-16 cursor-pointer text-gray-500 hover:text-gray-800"
          onClick={onClose}
        /> */}
        <XMarkIcon
          className="w-16 cursor-pointer text-gray-500 hover:text-gray-800 close-btn left-4"
          onClick={onClose}
        />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.development}</p>
        <div>
          <h3>Tech Stack</h3>
          <div className="tech-stack-content">
            {project.techStack?.map((tech, i) => {
              const icon =
                iconsMap[tech.icon as keyof typeof iconsMap] || tech.icon
              return <SkillTile key={i} icon={icon} text={tech.name} />
            })}
          </div>
        </div>
        <div>
          <h3>What I learned</h3>
          <ul>
            {project.objectives.map((objective, i) => (
              <li key={i}>{objective}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            {project.links?.deployment && (
              <li>
                <a
                  target="_blank"
                  href={project.links.deployment}
                  rel="noopener noreferrer"
                >
                  Deployment
                </a>
              </li>
            )}
            {project.links?.github && (
              <li>
                <a
                  target="_blank"
                  href={project.links.github}
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            )}
          </ul>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardFloating
