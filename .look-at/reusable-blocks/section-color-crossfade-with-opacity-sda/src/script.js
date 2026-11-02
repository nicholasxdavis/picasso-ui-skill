/*
  One IntersectionObserver that works out which section is past the entry line.

  - Always: marks that section's nav link with aria-current.
  - Without scroll-driven animations: sets data-entered on every section up to
    it, so the CSS can fade the layers in instead.

  The observer's root is shrunk to the part of the viewport above the entry
  line, so it only calls back when a section crosses the line (including a
  jump across several at once). root: document keeps rootMargin working inside
  cross-origin iframes, like a CodePen preview.
*/
const sections = [...document.querySelectorAll('.section')]
const links = [...document.querySelectorAll('.nav a')]
const scrollDriven = CSS.supports('animation-timeline: view()')

// One source of truth: the CSS custom property
const entryLine = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue('--entry-line')
)

let current

const update = () => {
  const line = innerHeight * entryLine
  let active = 0
  sections.forEach((section, index) => {
    if (index === 0 || section.getBoundingClientRect().top <= line)
      active = index
  })

  // Only touch the DOM when the section changes: every write restyles the nav
  if (active === current) return
  links[current]?.removeAttribute('aria-current')
  links[active].setAttribute('aria-current', 'true')
  current = active

  if (!scrollDriven)
    sections.forEach((section, index) =>
      section.toggleAttribute('data-entered', index <= active)
    )
}

const observer = new IntersectionObserver(update, {
  root: document,
  rootMargin: `0px 0px -${(1 - entryLine) * 100}% 0px`,
})
sections.forEach((section) => observer.observe(section))
update()
