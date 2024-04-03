import flatpickr from 'flatpickr';
import Timer from './timer-plugin.js';
import 'flatpickr/dist/flatpickr.min.css';

const startBtnRef = document.querySelector('button[data-start]');
const spanOutputRefs = [...document.querySelectorAll('span.value')];

const timer = new Timer(handleTimeOutput);

startBtnRef.setAttribute('disabled', '');
startBtnRef.addEventListener('click', timer.start.bind(timer));

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer.setDate(selectedDates) && startBtnRef.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);

function handleTimeOutput(timeObj, addLeadingZero) {
  spanOutputRefs.forEach(item => {
    const elemDatasetKey = Object.keys(item.dataset);
    item.textContent = addLeadingZero(timeObj[elemDatasetKey]);
  });
}
