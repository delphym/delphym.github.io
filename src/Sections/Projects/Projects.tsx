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
          <div key={index} className="project-item">
            <div className="project-item-top-row">
              <div className="project-item-header">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '40px',
                    marginBottom: '20px',
                  }}
                >
                  {/* LEFT COLUMN (60% width) */}
                  <div
                    style={{
                      flex: '0 0 60%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    <h1
                      style={{
                        fontSize: '50px',
                        fontWeight: 'bold',
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h1>

                    {/* Description */}
                    <div>
                      <p
                        style={{
                          fontSize: '17px',
                          lineHeight: '1.5',
                          margin: '0 0 10px 0',
                        }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Development */}
                    <div>
                      <h3
                        style={{
                          fontSize: '25px',
                          fontWeight: 'bold',
                          margin: '0 0 10px 0',
                        }}
                      >
                        Development
                      </h3>
                      <p
                        style={{
                          fontSize: '17px',
                          lineHeight: '1.5',
                          margin: 0,
                        }}
                      >
                        This project is built using both front-end and back-end
                        technologies.
                        {/* Here’s a brief overview of the approach: */}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT COLUMN (40% width) - MAIN IMAGE */}
                  <div style={{ flex: '0 0 35%' }}>
                    {project.mainImage && (
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '5px',
                        }}
                      >
                        <p></p>
                        <img
                          src={project.mainImage}
                          alt={project.title}
                          style={{ width: '100%', objectFit: 'contain' }}
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
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  {project.techStack?.map((tech, i) => {
                    const icon =
                      iconsMap[tech.icon as keyof typeof iconsMap] || tech.icon
                    return (
                      <SkillTile
                        key={i}
                        icon={icon}
                        text={tech.name}
                        // inline styling if you want
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="project-item-links">
              <h3>Links</h3>
              <ul
                style={{
                  margin: 0,
                  paddingInlineStart: '20px',
                  listStyle: 'disc',
                }}
              >
                {project.links?.deployment && (
                  <li style={{ marginBottom: '10px', fontSize: '17px' }}>
                    <a
                      target="_blank"
                      href={project.links.deployment}
                      rel="noreferrer"
                      style={{
                        color: 'rgb(241, 114, 110)',
                        textDecoration: 'underline',
                      }}
                    >
                      Deployment
                    </a>
                  </li>
                )}
                {project.links?.github && (
                  <li style={{ marginBottom: '10px', fontSize: '17px' }}>
                    <a
                      target="_blank"
                      href={project.links.github}
                      rel="noreferrer"
                      style={{
                        color: 'rgb(241, 114, 110)',
                        textDecoration: 'underline',
                      }}
                    >
                      GitHub
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {index < projectData.length - 1 && (
              <hr className="project-divider" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
