import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors.length);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
console.dir(bodyRef);
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
console.dir(btnStartRef);

const colorSwithcer = function () {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

btnStartRef.addEventListener('click', () => {
  const timerId = setInterval(colorSwithcer, 1000);
  btnStartRef.setAttribute('disabled', 'disabled');

  btnStopRef.addEventListener('click', () => {
    clearTimeout(timerId);
    btnStartRef.removeAttribute('disabled');
  });
});
