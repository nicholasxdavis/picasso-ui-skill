const TOGGLE = document.querySelector('button');

const HANDLE_TOGGLE = () => {
  TOGGLE.setAttribute('aria-pressed', TOGGLE.matches('[aria-pressed=true]') ? false : true);
};

TOGGLE.addEventListener('click', HANDLE_TOGGLE);

const INPUT = document.querySelector('input');

const APPLY_TRANSFORM_BOX = () => {
  TOGGLE.classList.toggle('unset');
};

INPUT.addEventListener('change', APPLY_TRANSFORM_BOX);