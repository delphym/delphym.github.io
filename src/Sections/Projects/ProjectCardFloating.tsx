import { XMarkIcon } from '@heroicons/react/24/solid'
import SkillTile from '../Skills/SkillTile'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import React from 'react'

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
  const [animationDuration, setAnimationDuration] = useState('20s')
  const [totalWidth, setTotalWidth] = useState(0)
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (project) {
      const imageCount = 1 + (project.additionalImages?.length ?? 0) // mainImage + additionalImages
      const duration = imageCount * 5 // 5 seconds per image
      setAnimationDuration(`${duration}s`)
      console.log('Animation duration: ', duration)

      // Calculate dynamically width of the images
      if (!containerRef.current) return
      const scrollW = containerRef.current?.scrollWidth
      setTotalWidth(scrollW)
      console.log('scrollW: ', scrollW)
    }
  }, [project])

  if (!project) return null

  // Render 2 sets of images to create the infinite loop effect
  const imagesFirstSet = (
    <>
      <img src={project.mainImage} alt={project.title} />
      {project.additionalImages?.map((image, index) => {
        const isLast = index === project.additionalImages.length - 1
        return (
          <img
            key={`first-${index}`}
            src={image}
            alt={`${project.title} ${index}`}
            style={{ marginRight: isLast ? '150px' : '10px' }}
          />
        )
      })}
    </>
  )
  const imagesSecondSet = (
    <>
      <img src={project.mainImage} alt={project.title} />
      {project.additionalImages?.map((image, index) => (
        <img
          key={`second-${index}`}
          src={image}
          alt={`${project.title} ${index}`}
        />
      ))}
    </>
  )

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
      <XMarkIcon
        className="w-16 cursor-pointer text-gray-500 hover:text-green-300 close-btn left-4"
        onClick={onClose}
      />
      <button
        onClick={onClose}
        className="w-16 cursor-pointer text-gray-500 hover:text-green-300 close-btn"
      >
        Close
      </button>

      <div
        className="project-card-floating"
        onClick={(e) => e.stopPropagation()}
        /*
           Stop propagation so that clicking inside the card
           doesn't trigger the overlay’s onClick
        */
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.development}</p>

        <div className="image-ticker">
          <div
            ref={containerRef}
            className="image-ticker-content"
            style={
              {
                '--move-dist': `${-totalWidth / 2}px`,
                '--ticker-duration': animationDuration,
              } as React.CSSProperties
            }
          >
            {imagesFirstSet}
            {imagesSecondSet}
          </div>
        </div>

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
        </div>
      </div>
    </div>
  )
}

export default ProjectCardFloating
