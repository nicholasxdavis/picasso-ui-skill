import gsap from 'https://esm.sh/gsap@3.13.0'
import Draggable from 'https://esm.sh/gsap@3.13.0/Draggable'
import { Pane } from 'https://esm.sh/tweakpane@4.0.5'
import Lenis from 'https://esm.sh/lenis'

gsap.registerPlugin(Draggable)
let lenis = null

const SIGN_TEXT = [
  ['Sine scroller.', 'CSS', 'hsla(212.98, 77.756%, 46.913%)', '#fff'],
  [
    'CSS scroll-driven animation.',
    'SDA',
    'hsla(19.761, 99.947%, 54.542%)',
    '#fff',
  ],
  [
    'Combine with sin() and custom properties.',
    'SIN',
    'hsla(100.98, 48.275%, 50.565%)',
    '#fff',
  ],
  ['lenis for smooth scroll.', 'JS', 'hsla(47.743, 97.954%, 52.297%)', '#000'],
]

const getSignIndices = (count) => {
  const last = count - 1
  return [
    ...new Set([0, Math.round(last / 3), Math.round((2 * last) / 3), last]),
  ]
}

const config = {
  theme: 'dark',
  count: 24,
  amplitude: 40,
  smoothscroll: true,
  frequency: 2.6,
  rangeOffset: 100,
  aspectMin: 1,
  aspectMax: 1.6,
  debug: false,
}

const ctrl = new Pane({
  title: 'config',
  expanded: false,
})

const list = document.querySelector('ul')

const randomAspect = () => {
  const { aspectMin, aspectMax } = config
  const ar = aspectMin + Math.random() * (aspectMax - aspectMin)
  return Math.round(ar * 10) / 10
}

const renderSign = ([heading, line, color, textColor]) => {
  const chars = [...line].map((char) => `<span>${char}</span>`).join('')
  return `<article class="sign" style="--sign-color: ${color}; --sign-text: ${textColor}">
    <h2>${heading}</h2>
    <p class="line">
      <span class="sr-only">${line}</span>
      <span class="chars" aria-hidden="true">${chars}</span>
    </p>
  </article>`
}

const renderItems = () => {
  const signIndices = getSignIndices(config.count)
  const signMap = new Map(signIndices.map((idx, i) => [idx, SIGN_TEXT[i]]))

  list.innerHTML = Array.from({ length: config.count }, (_, i) => {
    const signText = signMap.get(i)
    if (signText) {
      return `<li style="--index: ${i}"><div class="item">${renderSign(
        signText
      )}</div></li>`
    }

    const ar = randomAspect()
    const height = Math.round(220 * ar)
    return `<li style="--index: ${i}"><div class="item" style="aspect-ratio: 1 / ${ar}"><img src="https://picsum.photos/220/${height}?random=${
      i + 1
    }" alt="" /></div></li>`
  }).join('')
}

let lastRenderKey = null
const renderKey = () =>
  `${config.count}-${config.aspectMin}-${config.aspectMax}`

const update = () => {
  const key = renderKey()
  if (key !== lastRenderKey) {
    lastRenderKey = key
    renderItems()
  }

  document.documentElement.dataset.theme = config.theme
  document.documentElement.dataset.debug = config.debug

  if (config.smoothscroll && !lenis) {
    lenis = new Lenis({ autoRaf: true })
  } else if (!config.smoothscroll && lenis) {
    lenis.destroy()
    lenis = null
  }
  list.style.setProperty('--count', config.count)
  list.style.setProperty('--p', config.amplitude)
  list.style.setProperty('--w', config.frequency)
  list.style.setProperty('--range-offset', config.rangeOffset)
}

const sync = (event) => {
  if (
    !document.startViewTransition ||
    event.target.controller.view.labelElement.innerText !== 'theme'
  )
    return update()
  document.startViewTransition(() => update())
}

ctrl.addBinding(config, 'count', { min: 10, max: 40, step: 1 })
ctrl.addBinding(config, 'amplitude', { min: -180, max: 180, step: 1 })
ctrl.addBinding(config, 'frequency', { min: 0.1, max: 5, step: 0.1 })
ctrl.addBinding(config, 'aspectMin', {
  label: 'aspect min',
  min: 1,
  max: 3,
  step: 0.1,
})
ctrl.addBinding(config, 'aspectMax', {
  label: 'aspect max',
  min: 1,
  max: 3,
  step: 0.1,
})
ctrl.addBinding(config, 'rangeOffset', {
  label: 'range offset',
  min: 0,
  max: 300,
  step: 10,
})
ctrl.addBinding(config, 'smoothscroll', { label: 'smooth scroll' })
ctrl.addBinding(config, 'debug')
ctrl.addBlade({ view: 'separator' })
ctrl.addBinding(config, 'theme', {
  label: 'theme',
  options: {
    system: 'system',
    light: 'light',
    dark: 'dark',
  },
})

ctrl.on('change', sync)
update()

const tweakClass = 'div.tp-dfwv'
const d = Draggable.create(tweakClass, {
  type: 'x,y',
  allowEventDefault: true,
  trigger: tweakClass + ' button.tp-rotv_b',
})
document.querySelector(tweakClass).addEventListener('dblclick', () => {
  gsap.to(tweakClass, {
    x: `+=${d[0].x * -1}`,
    y: `+=${d[0].y * -1}`,
    onComplete: () => {
      gsap.set(tweakClass, { clearProps: 'all' })
    },
  })
})
