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
  // 1) Which project is selected? (null = none)
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectData)[0] | null
  >(null)

  // 2) Is the lightbox open (true) or closed (false)?
  const [isOpen, setIsOpen] = useState(false)

  /** Clicking a card:
   *  - store that project's data in state
   *  - set isOpen to true so the lightbox can fade in
   */
  const handleCardClick = (project: (typeof projectData)[0]) => {
    // 1) Set the project so it’s now in the DOM but isOpen is still false
    setSelectedProject(project)
    setIsOpen(false)
    // 2) Wait a moment so React commits that render
    //    Then set isOpen to true => triggers fade-in
    setTimeout(() => {
      setIsOpen(true)
    }, 50) // or 50ms for a more guaranteed 2-step render
  }

  /** Closing the lightbox:
   *  - fade out by setting isOpen to false
   *  - after fade-out transition, remove the project from state
   */
  const closeLightbox = () => {
    setIsOpen(false)
    // Wait for the CSS transition to finish, e.g., 300ms
    // Then remove the project from state
    setTimeout(() => {
      setSelectedProject(null)
    }, 300)
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

      {/* Always render the floating component, but pass the props:
          - which project is selected
          - whether it should be displayed or not (isOpen)
          - how to close
      */}
      {/* {selectedProject !== null && ( */}
      <ProjectCardFloating
        project={selectedProject}
        iconsMap={iconsMap} // <-- pass iconsMap to ProjectCardFloating
        isOpen={isOpen}
        onClose={closeLightbox}
      />
      {/* )} */}
    </div>
  )
}

export default Projects
