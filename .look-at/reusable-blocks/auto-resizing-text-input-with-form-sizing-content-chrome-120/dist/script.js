const MIN = document.querySelector('#min');
const MAX = document.querySelector('#max');

const CONSTRAIN = () => {
  document.documentElement.style.setProperty('--min', MIN.value);
  document.documentElement.style.setProperty('--max', MAX.value);
};

MIN.addEventListener('input', CONSTRAIN);
MAX.addEventListener('input', CONSTRAIN);
CONSTRAIN();