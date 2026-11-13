import { CSSProperties, useId } from 'react'

// Adapted from Vanessa Victorino's Higanbana CodePen supplied for this project.
// Source: https://codepen.io/editor/grauconejo13/pen/01a19f17-72ac-7126-af68-406e31973978

// Stable scatter keeps rerenders from moving the meadow.
const fraction = (value: number) => value - Math.floor(value)
const flowers = Array.from({ length: 64 }, (_, i) => {
  const depth = Math.pow(fraction(i * 0.414214 + 0.07), 1.4)
  return {
    '--x': fraction(i * 0.618034),
    '--depth': depth,
    '--tall': fraction(i * 0.731 + 0.2),
    '--hue': 24 + fraction(i * 0.317) * 12,
    '--lean': `${fraction(i * 0.217) * 14 - 7}deg`,
    '--sway': `${4 + fraction(i * 0.413) * 5}s`,
    '--t': `${depth * 2.2 + fraction(i * 0.3) * 0.9}s`,
  } as CSSProperties
})
const lights = Array.from(
  { length: 16 },
  (_, i) =>
    ({
      '--mx': fraction(i * 0.618034),
      '--my': fraction(i * 0.414214),
      '--mz': fraction(i * 0.731),
      '--mo': fraction(i * 0.317),
      '--md': `${14 + fraction(i * 0.217) * 10}s`,
      '--mw': `${fraction(i * 0.413) * 140 - 70}px`,
    }) as CSSProperties,
)

export default function OutroScenery() {
  const id = useId()
  return (
    <>
      <svg className="outro-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <path
            id={`${id}-petal`}
            d="M0 0 C9 -5 22 -9 33 -5 C39 -3 41 2 37 4 C33 6 30 2 33 0 C24 -1 12 1 0 0Z"
          />
          <g id={`${id}-stamen`}>
            <path
              d="M0 0 C2 -18 9 -36 20 -50"
              fill="none"
              stroke="currentColor"
              strokeWidth=".9"
              strokeLinecap="round"
            />
            <circle cx="20" cy="-50" r="1.5" />
          </g>
          <g id={`${id}-bloom`} fill="currentColor">
            <use href={`#${id}-stamen`} transform="rotate(-22)" />
            <use href={`#${id}-stamen`} transform="rotate(-4) scale(.92)" />
            <use href={`#${id}-stamen`} transform="rotate(16)" />
            <use href={`#${id}-stamen`} transform="rotate(38) scale(.86)" />
            <use href={`#${id}-stamen`} transform="rotate(58) scale(.78)" />
            <use
              href={`#${id}-stamen`}
              transform="scale(-1 1) rotate(-4) scale(.95)"
            />
            <use
              href={`#${id}-stamen`}
              transform="scale(-1 1) rotate(16) scale(.9)"
            />
            <use href={`#${id}-stamen`} transform="scale(-1 1) rotate(38)" />
            <use
              href={`#${id}-stamen`}
              transform="scale(-1 1) rotate(58) scale(.8)"
            />
            <use href={`#${id}-petal`} transform="rotate(-10)" />
            <use href={`#${id}-petal`} transform="rotate(25) scale(.9)" />
            <use href={`#${id}-petal`} transform="rotate(60)" />
            <use href={`#${id}-petal`} transform="rotate(100) scale(.85)" />
            <use href={`#${id}-petal`} transform="rotate(140)" />
            <use href={`#${id}-petal`} transform="rotate(175) scale(.9)" />
            <use href={`#${id}-petal`} transform="rotate(210)" />
            <use href={`#${id}-petal`} transform="rotate(250) scale(.85)" />
            <use href={`#${id}-petal`} transform="rotate(290)" />
            <use href={`#${id}-petal`} transform="rotate(325) scale(.9)" />
            <circle r="3.5" />
          </g>
        </defs>
      </svg>

      <div className="outro-moon" />
      <svg
        className="outro-hills"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="outro-far"
          d="M0 120 L0 70 C150 40 260 55 380 45 C520 30 640 60 780 48 C900 38 1040 22 1200 50 L1200 120Z"
        />
        <path
          className="outro-near"
          d="M0 120 L0 92 C180 70 300 88 460 78 C620 66 760 90 940 80 C1060 72 1140 82 1200 78 L1200 120Z"
        />
      </svg>
      <div className="outro-ground" />

      <div className="outro-field">
        {flowers.map((style, index) => (
          <div className="outro-lily" style={style} key={index}>
            <i className="outro-stem" />
            <svg className="outro-head" viewBox="-62 -66 124 100">
              <use href={`#${id}-bloom`} />
            </svg>
          </div>
        ))}
      </div>
      <div className="outro-spirits">
        {lights.map((style, index) => (
          <i className="outro-mote" style={style} key={index} />
        ))}
      </div>
    </>
  )
}
