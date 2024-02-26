const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStart.addEventListener('click', onStartClick);

function onStartClick(e) {
  const { target } = e;
  const intervalId = setInterval(() => {
    target.closest('body').style.backgroundColor = getRandomHexColor();
  }, 1000);
  target.setAttribute('disabled', '');

  const boundOnStopClick = onStopClick.bind(intervalId);
  refs.btnStop.addEventListener('click', boundOnStopClick, { once: true });
}

function onStopClick() {
  clearInterval(this);
  refs.btnStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
