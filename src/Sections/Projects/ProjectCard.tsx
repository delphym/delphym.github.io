import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import SkillTile from '../Skills/SkillTile'

interface ProjectCardProps {
  project: typeof import('../../data/projects.json')[0] | null
  onClick: () => void
  iconsMap: { [key: string]: IconDefinition | string }
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  iconsMap,
}) => {
  if (!project) return null

  return (
    <div className="project-item" onClick={onClick}>
      <div className="project-item-top-row">
        <div className="project-item-header">
          <div className="project-item-header-content">
            <div className="project-item-left-column">
              <h1>{project.title}</h1>
              <div>
                <p className="project-item-left-column-content">
                  {project.description}
                </p>
              </div>
              <div>
                <h3 className="project-item-tech-stack">Development</h3>
                <p className="project-item-left-column-content">
                  {project.development}
                </p>
              </div>
            </div>
            <div className="project-item-right-column">
              {project.mainImage && (
                <div className="project-item-main-image">
                  <p></p>
                  <img
                    src={`images/${project.prjFolder}/${project.mainImage}`}
                    alt={project.title}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="project-item-tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-stack-content">
          {project.techStack?.map((tech, i) => {
            const icon =
              iconsMap[tech.icon as keyof typeof iconsMap] || tech.icon
            return <SkillTile key={i} icon={icon} text={tech.name} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
