import './styles.css';
import updateClockface from './update-clock-face';
import updateMarkup from './updateMarkup';

const countdownTimer = {
  intervalId: null,
  selector: '#timer-1',
  targetDate: new Date('Feb 30, 2021'),
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    updateMarkup(updateClockface(0));

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const xTime = this.targetDate - currentTime;
      updateMarkup(updateClockface(xTime));
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    updateMarkup(updateClockface(0));
  },
};

const startBtn = document.querySelector('.js-startBtn');
const stopBtn = document.querySelector('.js-stopBtn');

startBtn.addEventListener('click', countdownTimer.start.bind(countdownTimer));
stopBtn.addEventListener('click', countdownTimer.stop.bind(countdownTimer));
