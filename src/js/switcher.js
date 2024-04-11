class Switcher {
  constructor(refs) {
    this.refs = refs;
    this.intervalId = null;
  }

  start(e) {
    const { target } = e;
    this.intervalId = setInterval(() => {
      target.closest('body').style.backgroundColor = this.getRandomHexColor();
    }, 1000);
    target.setAttribute('disabled', '');

    this.refs.btnStop.addEventListener('click', this.stop.bind(this), {
      once: true,
    });
  }

  stop() {
    clearInterval(this.intervalId);
    this.refs.btnStart.removeAttribute('disabled');
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}

export default Switcher;
