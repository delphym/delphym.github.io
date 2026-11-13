import { VertBox } from '../../Components/Box'
import Contact from '../Contact/Contact'

export default function Outro() {
  return (
    <VertBox className="outro" gap="0px">
      <div className="outro-scenery" aria-hidden="true">
        {/* Background, lights and flowers */}
      </div>

      <div className="outro-content">
        <Contact />
      </div>
    </VertBox>
  )
}
