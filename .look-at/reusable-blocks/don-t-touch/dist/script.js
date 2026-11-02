import { codeToHtml } from 'https://esm.sh/shiki@3.9.1'
import Matter from 'https://esm.sh/matter-js@0.20.0'
import { Pane } from 'https://esm.sh/tweakpane@4.0.5'
import * as TextareaPlugin from 'https://esm.sh/@pangenerator/tweakpane-textarea-plugin@2.0.0'

const source = `const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

// JUST LEAVE THIS ALONE
const FALLBACK_PRICE = 2_499

async function syncPrice(productId) {
  const response = await fetch(\`/api/products/\${productId}/price\`)

  if (!response.ok) {
    console.warn('Price sync failed — using fallback')
  }

  const { price = FALLBACK_PRICE } = response.ok
    ? await response.json()
    : {}

  const output = document.querySelector('[data-product-price]')
  output.textContent = formatter.format(price);;
  output.dataset.synced = response.ok

  return price
}

await syncPrice('studio-pro')`

const main = document.querySelector('main')
const codeHost = document.querySelector('.code-host')
const config = {
  theme: 'tokyo-night',
  lang: 'javascript',
  code: source,
  fizzy: true,
  keys: 1,
  delay: 300,
}

const ctrl = new Pane({ title: 'config', expanded: false })
ctrl.registerPlugin(TextareaPlugin)

const engine = Matter.Engine.create({ enableSleeping: true })
engine.positionIterations = 4
engine.velocityIterations = 3
engine.gravity.x = 0
engine.gravity.y = 0
engine.gravity.scale = 0.01

let characterBodies = []
let mouseConstraint
let frame
let active = false
let keyCount = 0
let resizeTimer
let resetTimer
let breakTimer
let renderVersion = 0

const disableWritingAssist = (root = document) => {
  for (const element of root.querySelectorAll('input, textarea, [contenteditable]')) {
    element.setAttribute('data-gramm', 'false')
    element.setAttribute('data-gramm_editor', 'false')
    element.setAttribute('data-enable-grammarly', 'false')
    element.setAttribute('spellcheck', 'false')
    element.setAttribute('autocomplete', 'off')
    element.setAttribute('autocorrect', 'off')
    element.setAttribute('autocapitalize', 'off')
  }
}

const wrapCharacters = (root) => {
  const nodes = []
  for (const line of root.querySelectorAll('.line')) {
    const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT)
    while (walker.nextNode()) nodes.push(walker.currentNode)
  }

  for (const node of nodes) {
    const fragment = document.createDocumentFragment()
    for (const character of node.data) {
      const span = document.createElement('span')
      span.className = 'character'
      span.textContent = character
      fragment.append(span)
    }
    node.replaceWith(fragment)
  }
}

const clearWorld = () => {
  cancelAnimationFrame(frame)
  if (mouseConstraint) Matter.Mouse.clearSourceEvents(mouseConstraint.mouse)
  Matter.Composite.clear(engine.world, false)
  Matter.Engine.clear(engine)
  characterBodies = []
  mouseConstraint = undefined
}

const createWalls = () => {
  const thickness = 2000
  const options = {
    isStatic: true,
    collisionFilter: { category: 0x0001 },
  }

  Matter.Composite.add(engine.world, [
    Matter.Bodies.rectangle(innerWidth * 0.5, innerHeight * -1 - thickness * 0.5, innerWidth * 10, thickness, options),
    Matter.Bodies.rectangle(innerWidth * 0.5, innerHeight + thickness * 0.5, innerWidth * 10, thickness, options),
    Matter.Bodies.rectangle(innerWidth + thickness * 0.5, 0, thickness, innerHeight * 10, options),
    Matter.Bodies.rectangle(thickness * -0.5, 0, thickness, innerHeight * 10, options),
  ])
}

const createCharacters = () => {
  const characters = [...main.querySelectorAll('.character')]
    .filter((character) => character.textContent.trim())

  characterBodies = characters.map((element, index) => {
    const bounds = element.getBoundingClientRect()
    const category = 0x0002 << (index % 8)
    element.style.setProperty('--delay', (Math.random() * 0.45).toFixed(2))
    element.style.setProperty('--speed', (Math.random() * 0.3 + 0.35).toFixed(2))
    return Matter.Bodies.rectangle(
      bounds.x + bounds.width * 0.5,
      bounds.y + bounds.height * 0.5,
      Math.max(bounds.width, 2),
      bounds.height,
      {
        density: 0.001,
        friction: 0.25,
        frictionAir: 0.006,
        restitution: config.fizzy ? 1.28 : 1,
        collisionFilter: {
          category,
          mask: 0x0001 | category,
        },
        element,
        startX: bounds.x + bounds.width * 0.5,
        startY: bounds.y + bounds.height * 0.5,
      }
    )
  })

  Matter.Composite.add(engine.world, characterBodies)
  createWalls()

  mouseConstraint = Matter.MouseConstraint.create(engine, {
    element: document.body,
  })
  mouseConstraint.mouse.element.removeEventListener('wheel', mouseConstraint.mouse.mousewheel)
  mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel)
  Matter.Composite.add(engine.world, mouseConstraint)
}

const render = () => {
  for (const character of characterBodies) {
    if (!character.element.isConnected) continue
    const x = Math.floor(character.position.x - character.startX)
    const y = Math.floor(character.position.y - character.startY)
    character.element.style.translate = `${x}px ${y}px`
  }
  Matter.Engine.update(engine)
  frame = requestAnimationFrame(render)
}

const activate = () => {
  if (active) return
  active = true
  main.dataset.active = 'true'
  main.querySelector('pre')?.removeAttribute('contenteditable')
  engine.gravity.y = 0.25
  frame = requestAnimationFrame(render)
}

const renderCode = async () => {
  const version = ++renderVersion
  clearTimeout(resetTimer)
  clearTimeout(breakTimer)
  breakTimer = undefined
  active = false
  keyCount = 0
  delete main.dataset.active
  clearWorld()
  engine.gravity.y = 0

  const html = await codeToHtml(config.code, {
    lang: config.lang,
    theme: config.theme,
  })
  if (version !== renderVersion) return

  codeHost.innerHTML = html
  const pre = codeHost.querySelector('pre')
  pre.contentEditable = 'true'
  disableWritingAssist(codeHost)
  wrapCharacters(pre.querySelector('code'))

  await document.fonts.ready
  if (version === renderVersion) requestAnimationFrame(createCharacters)
}

const reset = () => {
  if (!active) return renderCode()

  active = false
  keyCount = 0
  cancelAnimationFrame(frame)
  engine.gravity.y = 0
  main.dataset.active = 'false'

  for (const character of characterBodies) {
    Matter.Body.setPosition(character, {
      x: character.startX,
      y: character.startY,
    })
    Matter.Body.setVelocity(character, { x: 0, y: 0 })
    Matter.Body.setAngularVelocity(character, 0)
    Matter.Body.setAngle(character, 0)
  }

  requestAnimationFrame(() => {
    for (const character of characterBodies) {
      if (!character.element.isConnected) continue
      character.element.style.translate = '0px 0px'
    }
  })

  // Re-render after the return transition to restore the edited glyph too.
  resetTimer = setTimeout(renderCode, 1150)
}

main.addEventListener('input', () => {
  if (active || breakTimer) return
  keyCount++
  if (keyCount >= config.keys) {
    main.querySelector('pre')?.removeAttribute('contenteditable')
    breakTimer = setTimeout(() => {
      breakTimer = undefined
      activate()
    }, config.delay)
  }
})

main.addEventListener('dblclick', () => {
  if (active) reset()
})

ctrl.addBinding(config, 'code', {
  label: 'Code',
  view: 'textarea',
  rows: 7,
}).on('change', () => renderCode())

ctrl.addBinding(config, 'lang', {
  label: 'Language',
  options: {
    TSX: 'tsx',
    JavaScript: 'javascript',
    CSS: 'css',
    HTML: 'html',
  },
}).on('change', () => renderCode())

ctrl.addBinding(config, 'theme', {
  label: 'Theme',
  options: {
    'GitHub Dark': 'github-dark-default',
    'Dark+': 'dark-plus',
    'One Dark Pro': 'one-dark-pro',
    Dracula: 'dracula',
    'Tokyo Night': 'tokyo-night',
    Poimandres: 'poimandres',
    'Vitesse Black': 'vitesse-black',
  },
}).on('change', () => renderCode())

ctrl.addBinding(config, 'fizzy', { label: 'Fizzy' })
  .on('change', () => renderCode())

ctrl.addBinding(config, 'keys', {
  min: 1,
  max: 20,
  step: 1,
  label: 'Presses',
})

ctrl.addBinding(config, 'delay', {
  min: 0,
  max: 1000,
  step: 25,
  label: 'Delay (ms)',
})

ctrl.addButton({ title: 'Reset' }).on('click', reset)
disableWritingAssist()

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(renderCode, 160)
})

renderCode()
