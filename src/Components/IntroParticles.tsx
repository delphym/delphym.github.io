import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
  MoveDirection,
  OutMode,
  type ISourceOptions,
} from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

let engineInitialization: Promise<void> | undefined

const options: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 120,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#f1726e',
      distance: 150,
      enable: true,
      opacity: 0.35,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: false,
      speed: 1.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 60,
    },
    opacity: {
      value: 0.55,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
  },
  detectRetina: true,
}

function initializeEngine() {
  engineInitialization ??= initParticlesEngine(async (engine) => {
    await loadSlim(engine)
  })

  return engineInitialization
}

export default function IntroParticles() {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    let active = true

    void initializeEngine().then(() => {
      if (active) {
        setInitialized(true)
      }
    })

    return () => {
      active = false
    }
  }, [])

  if (!initialized) {
    return null
  }

  return (
    <Particles
      id="intro-particles"
      className="intro-particles"
      options={options}
    />
  )
}
