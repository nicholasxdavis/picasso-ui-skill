const INPUT = document.querySelector('#bounce');
const restart = event => {
  if (INPUT.checked) {
    const animations = document.getAnimations();
    for (const anim of animations) {
      anim.currentTime = 0;
      anim.play();
    }
  } else {
    const header = document.querySelector('h1');
    const markup = header.innerHTML;
    header.remove();
    requestAnimationFrame(() => {
      document.body.appendChild(Object.assign(document.createElement('h1'), {
        innerHTML: markup }));

    });
    console.info({ markup });
  }
};
document.body.addEventListener('click', restart);