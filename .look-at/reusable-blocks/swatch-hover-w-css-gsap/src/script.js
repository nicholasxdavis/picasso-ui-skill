import { Pane } from 'https://esm.sh/tweakpane@4.0.4'
import gsap from 'https://esm.sh/gsap@3.12.0'
import Color from 'https://esm.sh/color'

const config = {
  theme: 'system',
  swatches: 12,
  threshold: 120,
  start: 72,
  distance: 42,
  rotation: -5,
  out: 'power2.out',
  in: 'power4.in',
}

// the trick: on pointer events, distribute a value across an ease using a distributor
const setters = []
const list = document.querySelector('ul.swatches')
const eases = {
  in: gsap.parseEase(config.in),
  out: gsap.parseEase(config.out),
}

const generateSwatches = () => {
  setters.length = 0
  list.innerHTML = `
    ${new Array(config.swatches)
      .fill()
      .map((_, index) => {
        const color = `hsl(0, 0%, ${Math.round(
          (0.25 + (index / config.swatches) * 0.75) * 100
        )}%)`
        const newColor = Color(color)
        return `
            <li data-dark="${newColor.isDark()}" style="--color: ${color}; --i: ${index};">
              <button data-color="${color}">
                <span>${color}</span>
              </button>
            </li>
          `
      })
      .join('')}
  `
  list.style.setProperty('--swatch-count', config.swatches)
}

const syncWave = ({ x: pointerX, type, target }) => {
  let x = pointerX
  if (type === 'focus') {
    x = target.getBoundingClientRect().left
  }
  // all you care about is normalizing the center point of each list item against the cursor position
  for (let i = 0; i < list.children.length; i++) {
    if (!setters[i])
      setters[i] = gsap.utils.pipe(
        ({ distance, width }) => {
          const clamped = gsap.utils.clamp(
            -config.threshold,
            config.threshold,
            distance + width * 0.5
          )
          return { clamped, width }
        },
        ({ clamped, width }) => {
          const mapped = gsap.utils.mapRange(
            -config.threshold,
            config.threshold,
            -1,
            1
          )(clamped)
          return { mapped, active: Math.abs(clamped) <= width * 0.4 }
        },
        ({ mapped, active }) => {
          const offset = active ? 0 : 0
          return mapped > 0
            ? 1 - eases.in(mapped) - offset
            : 1 - eases.out(Math.abs(mapped)) - offset
        },
        gsap.quickSetter(list.children[i], '--power')
      )
    const child = list.children[i]
    const { left, width } = child.getBoundingClientRect()

    setters[i]({
      distance: x - (left + width * 0.5),
      width,
    })
  }
}

const settleWave = () => {
  for (const setter of setters) setter(0)
}

const copyColor = (event) => {
  if (event.target.tagName === 'BUTTON') {
    navigator.clipboard
      .writeText(event.target.dataset.color)
      .then(() => {
        const markup = event.target.innerHTML
        event.target.innerHTML = '<span>Copied!</span>'
        setTimeout(() => {
          event.target.innerHTML = markup
        }, 2000)
      })
      .catch((err) => {
        console.error('Failed to copy text to clipboard:', err)
      })
  }
}

list.addEventListener('click', copyColor)
list.addEventListener('pointermove', syncWave)
list.addEventListener('pointerleave', settleWave)
list.addEventListener('focus', syncWave, true)
list.addEventListener('blur', settleWave, true)

// all your tweakpane stuff goes here
const ctrl = new Pane({
  title: 'Config',
  expanded: false,
})

const update = () => {
  document.documentElement.dataset.theme = config.theme
  list.style.setProperty('--offset-y', config.start)
  list.style.setProperty('--distance', config.distance)
  list.style.setProperty('--rotate', config.rotation)
  eases.in = gsap.parseEase(config.in)
  eases.out = gsap.parseEase(config.out)
}

const sync = (event) => {
  if (
    !document.startViewTransition ||
    event.target.controller.view.labelElement.innerText !== 'Theme'
  )
    return update()
  document.startViewTransition(() => update())
}

const easings = {
  none: 'none',
  'power1.in': 'power1.in',
  'power2.in': 'power2.in',
  'power3.in': 'power3.in',
  'power4.in': 'power4.in',
  'power1.out': 'power1.out',
  'power2.out': 'power2.out',
  'power3.out': 'power3.out',
  'power4.out': 'power4.out',
  'power1.inOut': 'power1.inOut',
  'power2.inOut': 'power2.inOut',
  'power3.inOut': 'power3.inOut',
  'power4.inOut': 'power4.inOut',
  'back.in': 'back.in',
  'back.out': 'back.out',
  'back.inOut': 'back.inOut',
  'sine.in': 'sine.in',
  'sine.out': 'sine.out',
  'sine.inOut': 'sine.inOut',
  'circ.in': 'circ.in',
  'circ.out': 'circ.out',
  'circ.inOut': 'circ.inOut',
}

ctrl.addBinding(config, 'threshold', {
  label: 'Threshold',
  min: 50,
  max: 400,
  step: 1,
})
ctrl.addBinding(config, 'in', {
  label: 'Ease In',
  options: easings,
})
ctrl.addBinding(config, 'out', {
  label: 'Ease Out',
  options: easings,
})
ctrl.addBinding(config, 'start', {
  min: 50,
  max: 90,
  step: 1,
  label: 'Start',
})
ctrl.addBinding(config, 'distance', {
  min: 10,
  max: 60,
  step: 1,
  label: 'Travel',
})
ctrl.addBinding(config, 'rotation', {
  min: -15,
  max: 15,
  step: 1,
  label: 'Rotate',
})
ctrl
  .addBinding(config, 'swatches', {
    label: 'Count',
    min: 6,
    max: 20,
    step: 1,
  })
  .on('change', () => generateSwatches())
ctrl.addBinding(config, 'theme', {
  label: 'Theme',
  options: {
    System: 'system',
    Light: 'light',
    Dark: 'dark',
  },
})

ctrl.on('change', sync)
update()
generateSwatches()
