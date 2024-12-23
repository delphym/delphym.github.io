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
const iconsMap: { [key: string]: any } = {
  faCss,
  faJs,
  faNodeJs,
  faReact,
  faDatabase,
}

export default function Projects() {
  return (
    <div
      id="Projects"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        // Some spacing to top/bottom so it doesn't slam against other sections
        padding: '60px 0',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Page Header */}
      <div style={{ width: '80%', maxWidth: '1200px' }}>
        <h2 style={{ fontSize: '30px', margin: '0 0 20px 0' }}>My Projects</h2>
      </div>

      {/* Content Box for Projects */}
      <div
        style={{
          width: '80%',
          maxWidth: '1200px',
          borderRadius: '15px',
          boxShadow: '0 5px 10px 5px rgba(0, 0, 0, 0.3)',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          boxSizing: 'border-box',
          backgroundColor: 'rgb(50, 84, 146)', // or whatever colour you want
        }}
      >
        {projectData.map((project, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* -- TOP ROW: Title / Desc / Dev on the left, Main image on the right -- */}
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

            {/* -- TECH STACK -- */}
            <div style={{ marginBottom: '20px' }}>
              <h3
                style={{
                  fontSize: '25px',
                  fontWeight: 'bold',
                  margin: '0 0 10px 0',
                }}
              >
                Tech Stack
              </h3>

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

            {/* -- LINKS -- */}
            <div style={{ marginBottom: '20px' }}>
              <h3
                style={{
                  fontSize: '25px',
                  fontWeight: 'bold',
                  margin: '0 0 10px 0',
                }}
              >
                Links
              </h3>
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

            {/* -- DIVIDER (except for last item) -- */}
            {index < projectData.length - 1 && (
              <hr
                style={{
                  marginTop: '40px',
                  marginBottom: '40px',
                  borderColor: '#fff',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

{
  /* <div class="project-card"><div class="m-4 p-4 rounded-lg shadow-lg bg-white hover:bg-white flex flex-col sm:flex-row button border border-white"><img class="h-52 rounded-lg" src="https://stellar-share-mania-roa-24.pushed.nz/images/Homepage/TrolleGuy.png"><div class="p-4 m-4 text-right w-full"><span class="text-3xl font-bold">Stellar Share</span><br><br><p class="text-lg font-bold">Community sharing app with a sci-fi theme</p><br><p class="text-md text-red-400 font-bold">Typescript, React, Node.js, Express.js, Knex.js, SQLite 3</p></div></div></div> */
}
