import {
  faCss,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const iconsMap = {
  faCss,
  faJs,
  faNodeJs,
  faReact,
  faDatabase,
}

import { Box, VertBox } from '../../Components/Box'
import SkillTile from '../Skills/SkillTile'
import projectData from '../../data/projects.json'

export default function ProjectsDynamic() {
  return (
    <VertBox
      tag="section"
      id="Projects"
      className="flex flex-col items-center"
      gap="20px"
    >
      <div className="content-width">
        <h2>My Projects</h2>
      </div>

      <div className="content-box content-width projects-box">
        {projectData.map((project, index) => (
          <VertBox gap="20px" key={index}>
            {/* -- BEGIN TOP ROW -- */}
            <div className="proj-con" style={{ display: 'flex', gap: '40px' }}>
              {/* LEFT COLUMN: Title, Description, Development */}
              <VertBox
                className="proj-left"
                gap="20px"
                style={{ flex: '0 0 60%' }}
              >
                <div className="font-bold text-[50px]">{project.title}</div>

                <VertBox className="proj-sec" gap="20px">
                  <p>{project.description}</p>
                </VertBox>

                <VertBox className="proj-sec" gap="10px">
                  <h3 className="font-bold">Development</h3>
                  <p>
                    This project is built using both front-end and back-end
                    technologies. Here’s a brief overview of the approach:
                  </p>
                </VertBox>
              </VertBox>

              {/* RIGHT COLUMN: Main Image */}
              <VertBox
                className="proj-right"
                gap="20px"
                style={{ flex: '0 0 40%' }}
              >
                {project.mainImage && (
                  <VertBox
                    className="proj-img-sec"
                    gap="5px"
                    style={{ maxWidth: '100%' }}
                  >
                    <p>Main Screenshot</p>
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      style={{ width: '100%', objectFit: 'contain' }}
                    />
                  </VertBox>
                )}
              </VertBox>
            </div>
            {/* -- END TOP ROW -- */}

            {/* TECH STACK */}
            <VertBox className="proj-sec" gap="10px">
              <h3 className="font-bold">Tech Stack</h3>
              <Box className="skills-tiles" gap="10px">
                {project.techStack?.map((tech, i) => {
                  const icon = iconsMap[tech.icon] || tech.icon
                  return <SkillTile key={i} icon={icon} text={tech.name} />
                })}
              </Box>
            </VertBox>

            {/* LINKS */}
            <VertBox className="proj-sec" gap="10px">
              <h3 className="font-bold">Links</h3>
              <ul className="list-disc list-inside">
                {project.links?.deployment && (
                  <li>
                    <a
                      target="_blank"
                      className="link"
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
                      className="link"
                      href={project.links.github}
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                )}
              </ul>
            </VertBox>

            {/* ADDITIONAL IMAGES (If any) */}
            {project.additionalImages &&
              project.additionalImages.length > 0 && (
                <VertBox className="proj-right" gap="20px">
                  {project.additionalImages.map((imgUrl, idx) => (
                    <VertBox className="proj-img-sec" gap="5px" key={idx}>
                      <p>Additional Screenshot {idx + 1}</p>
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot`}
                        style={{ width: '100%', objectFit: 'contain' }}
                      />
                    </VertBox>
                  ))}
                </VertBox>
              )}

            {/* OPTIONAL DIVIDER */}
            {index < projectData.length - 1 && (
              <hr style={{ marginTop: '20px', marginBottom: '20px' }} />
            )}
          </VertBox>
        ))}
      </div>
    </VertBox>
  )
}
