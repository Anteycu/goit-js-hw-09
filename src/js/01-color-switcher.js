import Switcher from './switcher-plugin';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
const colors = new Switcher(refs);

refs.btnStart.addEventListener('click', colors.start.bind(colors));
