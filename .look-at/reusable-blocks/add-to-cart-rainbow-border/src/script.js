import gsap from 'https://esm.sh/gsap@3.13.0'
import Draggable from 'https://esm.sh/gsap@3.13.0/Draggable'
import { Pane } from 'https://esm.sh/tweakpane@4.0.4'
gsap.registerPlugin(Draggable)

const config = {
  theme: 'dark',
  complete: false,
  scale: 1.5,
  reveal: false,
}

const ctrl = new Pane({
  title: 'config',
  expanded: true,
})

const update = () => {
  document.documentElement.dataset.theme = config.theme
  document.documentElement.dataset.complete = config.complete
  document.documentElement.style.setProperty('--scale', config.scale)
  document.documentElement.dataset.reveal = config.reveal
}

const sync = (event) => {
  if (
    !document.startViewTransition ||
    event.target.controller.view.labelElement.innerText !== 'theme'
  )
    return update()
  document.startViewTransition(() => update())
}

ctrl.addBinding(config, 'scale', {
  min: 1,
  max: 4,
  step: 0.5,
})

ctrl.addBinding(config, 'reveal', {
  label: 'reveal',
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

// make tweakpane panel draggable
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

const atc = document.querySelector('.atc')
const main = document.querySelector('main')
const text = atc.querySelector('.atc__text')
const cart = atc.querySelector('.atc__cart')
const item = atc.querySelector('.atc__cart-content')
const animatedBorder = atc.querySelector('.atc__border--animated:not(.atc__border--demo)')
const staticBorder = atc.querySelector('.atc__border--static')
const completeBorder = atc.querySelector('.atc__border--complete')
const dummy = atc.querySelector('.atc__cart--dummy')
const check = atc.querySelector('.atc__check')
let running = false

gsap.set('.atc__cart-content', {
  y: -24
})

const addToCart = async () => {
  if (running) return
  running = true
  atc.dataset.adding = 'true'
  const dummyRect = dummy.getBoundingClientRect()
  const cartRect = cart.getBoundingClientRect()
  const distance = {
    x: dummyRect.left - cartRect.left,
  }
  gsap.timeline({
    onComplete: () => {
      running = false
      atc.dataset.adding = 'false'
    }
  })
  .set(main, {
    '--complete': 1,
  })
  .to(cart, {
    x: distance.x / config.scale,
    duration: 0.22,
  })
  .to(cart, {
    rotate: -20,
    yoyo: true,
    repeat: 1,
    duration: 0.11,
  }, 0)
  .to(text, {
    opacity: 0,
    x: distance.x / config.scale,
    duration: 0.22,
    filter: 'blur(6px)',
  }, 0)
  .to(item, {
    y: 0,
    duration: 0.1,
    delay: 0.1,
  })
  .to(staticBorder, {
    opacity: 1,
    duration: 0.1,
  }, '<')
  .set(main, {
    '--complete': 0,
  })
  .set(animatedBorder, {
    opacity: 0,
  })
  .to(cart, {
    x: (distance.x / config.scale) * 4,
    duration: 0.6,
    delay: 0.1,
  })
  .to(cart, {
    rotate: -30,
    duration: 0.1,
  }, '<')
  .to(completeBorder, {
    opacity: 1,
    duration: 0.22,
  }, '<')
  .to(check, {
    opacity: 1,
    yoyo: true,
    scale: 1.5,
    duration: 0.25,
    repeatDelay: 0.125,
    repeat: 1,
  }, '<')
  .set(text, {
    x: 0,
    xPercent: 0,
  })
  .set(cart, {
    x: -100,
    rotate: 0,
  })
  .set(item, {
    y: -24,
  })
  .to([staticBorder, completeBorder], {
    opacity: 0,
    duration: 0.5,
    delay: 0.125,
  })
  .to(text, {
    xPercent: 0,
    opacity: 1,
    duration: 0.22,
    filter: 'blur(0px)',
  })
  .to(cart, {
    x: 0
  })
  .to(animatedBorder, {
    opacity: 1,
    duration: 1,
    ease: 'power2.in',
  })
}

atc.addEventListener('click', addToCart)
gsap.defaults({
  duration: 0.5,
  ease: 'power2.out',
})