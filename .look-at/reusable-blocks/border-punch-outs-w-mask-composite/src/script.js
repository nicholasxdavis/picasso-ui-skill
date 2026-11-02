import { Pane } from 'https://esm.sh/tweakpane@4.0.4'

const config = {
  theme: 'dark',
  explode: false,
  bgalpha: 0.6,
  border: 4,
  radius: 12,
  width: 280,
  height: 220,
  x: 0,
  y: 0,
  alpha: 0,
  blur: 4,
}

const ctrl = new Pane({
  title: 'Config',
  expanded: true,
})

const update = () => {
  document.documentElement.dataset.theme = config.theme
  document.documentElement.style.setProperty('--border', config.border)
  document.documentElement.style.setProperty('--radius', config.radius)
  document.documentElement.style.setProperty('--width', config.width)
  document.documentElement.style.setProperty('--height', config.height)
  document.documentElement.style.setProperty('--x', config.x)
  document.documentElement.style.setProperty('--y', config.y)
  document.documentElement.style.setProperty('--bg-alpha', 1 - config.bgalpha)
  document.documentElement.style.setProperty('--alpha', config.alpha)
  document.documentElement.style.setProperty('--blur', config.blur)
}

const sync = (event) => {
  if (
    !document.startViewTransition ||
    event.target.controller.view.labelElement.innerText !== 'theme'
  )
    return update()
  document.startViewTransition(() => update())
}

ctrl.addBinding(config, 'border', {
  min: 1,
  max: 30,
  step: 1,
})
ctrl.addBinding(config, 'radius', {
  min: 1,
  max: 500,
  step: 1,
})
ctrl.addBinding(config, 'width', {
  min: 50,
  max: 400,
  step: 1,
})
ctrl.addBinding(config, 'height', {
  min: 50,
  max: 400,
  step: 1,
})
ctrl.addBinding(config, 'alpha', {
  min: 0,
  max: 1,
  step: 0.01,
})
ctrl.addBinding(config, 'bgalpha', {
  min: 0,
  max: 1,
  step: .01,
})
ctrl.addBinding(config, 'blur', {
  min: 0,
  max: 50,
  step: 1,
})
ctrl.addBinding(config, 'x', {
  min: -100,
  max: 100,
  step: 1,
})
ctrl.addBinding(config, 'y', {
  min: -100,
  max: 100,
  step: 1,
})
ctrl.addBinding(config, 'explode').on('change', () => {
  const exploded = config.explode
  document.body.toggleAttribute('data-exploded')
  if (!exploded) {
    // Need to tear down the explosion
    document.body.toggleAttribute('data-imploding')
    const TRANSITION = document.getAnimations()
    Promise.all([...TRANSITION.map((t) => t.finished)]).then(() => {
      document.body.toggleAttribute('data-imploding')
    })
  }
})

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
