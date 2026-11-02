const container = document.querySelector('ul');
const anchors = Array.from(container.querySelectorAll('a'));
container.addEventListener('click', event => {
  if (event.target.tagName !== 'A') return;
  for (const anchor of anchors) {
    anchor.dataset.active = event.target === anchor;
  }
});