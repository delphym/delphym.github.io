import React from 'react'
import {
  faCss,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import SkillTile from '../Skills/SkillTile'
import projectData from '../../data/projects.json'

// Map string keys from JSON to actual Font Awesome icon objects:
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const iconsMap: { [key: string]: IconDefinition } = {
  faCss,
  faJs,
  faNodeJs,
  faReact,
  faDatabase,
}

const Projects = () => {
  return (
    <div id="Projects">
      <div>
        <h2>My Projects</h2>
      </div>

      <div className="projects-content">
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <div className="project-item">
              <div className="project-item-top-row">
                <div className="project-item-header">
                  <div className="project-item-header-content">
                    {/* LEFT COLUMN (60% width) */}
                    <div className="project-item-left-column">
                      <h1>{project.title}</h1>
                      {/* Description */}
                      <div>
                        <p className="project-item-left-column-content">
                          {project.description}
                        </p>
                      </div>

                      {/* Development */}
                      <div>
                        <h3 className="project-item-tech-stack">Development</h3>
                        <p className="project-item-left-column-content">
                          {project.development}
                        </p>
                      </div>
                    </div>
                    {/* RIGHT COLUMN (35% width) - MAIN IMAGE */}
                    <div className="project-item-right-column">
                      {project.mainImage && (
                        <div className="project-item-main-image">
                          <p></p>
                          <img src={project.mainImage} alt={project.title} />
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

              <div className="project-item-links">
                <h3>Links</h3>
                <ul>
                  {project.links?.deployment && (
                    <li>
                      <a
                        target="_blank"
                        href={project.links.deployment}
                        rel="noreferrer"
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
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {index < projectData.length - 1 && (
              <hr className="project-divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Projects
