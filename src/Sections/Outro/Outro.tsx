import { useEffect, useRef, useState } from 'react'
import { VertBox } from '../../Components/Box'
import Contact from '../Contact/Contact'
import OutroScenery from './OutroScenery'
import './Outro.css'

export default function Outro() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    if (!('IntersectionObserver' in window)) {
      setActive(true)
      return
    }
    // Observe the content wrapper, which includes the space below Contact.
    // Leaving the whole area resets the bloom for the next visit.
    const observer = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting)
    })
    observer.observe(content)
    return () => observer.disconnect()
  }, [])

  return (
    <VertBox className={`outro${active ? ' outro-active' : ''}`} gap="0px">
      <div className="outro-scenery" aria-hidden="true">
        <OutroScenery />
      </div>
      <div className="outro-content" ref={contentRef}>
        <Contact />
      </div>
    </VertBox>
  )
}
