import { Pane } from 'https://esm.sh/tweakpane@4.0.4';

const config = {
  theme: 'system',
  delay: 1,
  cross: 2.8,
  crossd: 0,
  dot: 4.4,
  dotd: 0.8 };


const ctrl = new Pane({
  title: 'Config',
  expanded: false });


const update = () => {
  document.documentElement.dataset.theme = config.theme;
  // set the delays
  document.documentElement.style.setProperty('--base-delay', config.delay);
  document.documentElement.style.setProperty('--cross-delay', config.crossd);
  document.documentElement.style.setProperty('--cross-speed', config.cross);
  document.documentElement.style.setProperty('--dot-delay', config.dotd);
  document.documentElement.style.setProperty('--dot-speed', config.dot);
};

const sync = event => {
  if (
  !document.startViewTransition ||
  event.target.controller.view.labelElement.innerText !== 'Theme')

  return update();
  document.startViewTransition(() => update());
};

const timings = ctrl.addFolder({ title: 'timings', expanded: false });
timings.addBinding(config, 'delay', {
  min: 0,
  max: 5,
  step: 0.01,
  label: 'delay (s)' });

const cross = timings.addFolder({ title: 'cross', expanded: false });
cross.addBinding(config, 'cross', {
  min: 0.2,
  max: 5,
  step: 0.01,
  label: 'speed (s)' });

cross.addBinding(config, 'crossd', {
  min: 0,
  max: 5,
  step: 0.01,
  label: 'delay (s)' });

const dot = timings.addFolder({ title: 'dot', expanded: false });
dot.addBinding(config, 'dot', {
  min: 0.2,
  max: 5,
  step: 0.01,
  label: 'speed (s)' });

dot.addBinding(config, 'dotd', {
  min: 0,
  max: 5,
  step: 0.01,
  label: 'delay (s)' });

ctrl.addBinding(config, 'theme', {
  label: 'Theme',
  options: {
    System: 'system',
    Light: 'light',
    Dark: 'dark' } });


const header = document.querySelector('header');
const reanimate = () => {
  const current = header.innerHTML;
  header.innerHTML = '';
  requestAnimationFrame(() => {
    header.innerHTML = current;
  });
};

ctrl.addButton({ title: 'Restart' }).on('click', reanimate);

ctrl.on('change', sync);
update();