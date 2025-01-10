import React, { useState } from 'react'
import {
  faCss,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import projectData from '../../data/projects.json'
import ProjectCard from './ProjectCard'
import ProjectCardFloating from './ProjectCardFloating'

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
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectData)[0] | null
  >(null)

  const handleCardClick = (project: (typeof projectData)[0]) => {
    setSelectedProject(project)
  }

  const closeLightbox = () => {
    setSelectedProject(null)
  }

  return (
    <div id="Projects">
      <div>
        <h2>My Projects</h2>
      </div>

      <div className="projects-content">
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard
              project={project}
              onClick={() => handleCardClick(project)}
              iconsMap={iconsMap}
            />
            {index < projectData.length - 1 && (
              <hr className="project-divider" />
            )}
          </React.Fragment>
        ))}
      </div>

      {selectedProject !== null && (
        <ProjectCardFloating
          project={selectedProject}
          onClose={closeLightbox}
          iconsMap={iconsMap} // <-- pass iconsMap to ProjectCardFloating
        />
      )}
    </div>
  )
}

export default Projects
