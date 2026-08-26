import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
  MoveDirection,
  OutMode,
  type ISourceOptions,
} from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { loadTrailEffect } from '@tsparticles/effect-trail'
import {
  loadPolygonPath,
  polygonPathName,
} from '@tsparticles/path-polygon'
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters'
import { loadEmittersShapeSquare } from '@tsparticles/plugin-emitters-shape-square'

let engineInitialization: Promise<void> | undefined

type ParticleVariant = 'classic' | 'hexagon'

const classicOptions: ISourceOptions = {
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

const hexagonOptions: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: '#f1726e',
      animation: {
        enable: true,
        speed: 8,
      },
    },
    effect: {
      type: 'trail',
      options: {
        trail: {
          length: 50,
          minWidth: 4,
        },
      },
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.destroy,
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0,
        },
        generator: polygonPathName,
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30,
        },
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      value: 0,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 2,
    },
  },
  emitters: {
    domId: 'intro-title',
    direction: MoveDirection.none,
    fill: false,
    rate: {
      quantity: 1,
      delay: 0.25,
    },
    shape: {
      type: 'square',
    },
  },
  detectRetina: true,
}

function getParticleVariant(): ParticleVariant {
  const requestedVariant = new URLSearchParams(window.location.search).get(
    'particles',
  )

  if (requestedVariant === 'classic' || requestedVariant === 'hexagon') {
    return requestedVariant
  }

  return Math.random() < 0.5 ? 'classic' : 'hexagon'
}

function initializeEngine() {
  engineInitialization ??= initParticlesEngine(async (engine) => {
    await loadSlim(engine)
    await loadTrailEffect(engine)
    await loadPolygonPath(engine)
    await loadEmittersPlugin(engine)
    await loadEmittersShapeSquare(engine)
  })

  return engineInitialization
}

export default function IntroParticles() {
  const [initialized, setInitialized] = useState(false)
  const [variant] = useState<ParticleVariant>(getParticleVariant)
  const options = variant === 'classic' ? classicOptions : hexagonOptions

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
      key={variant}
      id="intro-particles"
      className="intro-particles"
      options={options}
    />
  )
}
