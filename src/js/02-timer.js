import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const startBtnRef = document.querySelector('button[data-start]');
const spanOutputRefs = [...document.querySelectorAll('span.value')];

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer(selectedDates);
  },
};

flatpickr('#datetime-picker', options);

startBtnRef.setAttribute('disabled', '');

function timer(chosenDate) {
  const parsedChosDate = Date.parse(chosenDate[0]);
  const parsedCurrDate = Date.parse(new Date());

  if (parsedCurrDate > parsedChosDate) {
    Notify.failure('Failure. Please choose a date in the future', {
      clickToClose: true,
    });
    return;
  }

  startBtnRef.removeAttribute('disabled');

  const boundClickHandler = onClick.bind(parsedChosDate);
  startBtnRef.addEventListener('click', boundClickHandler);
}

function onClick() {
  const intervalId = setInterval(() => {
    const timeLeftObj = convertMs(calculatedLeftTime(this));
    spanOutputRefs.forEach(item => {
      const elemDatasetKey = Object.keys(item.dataset);
      item.textContent = addLeadingZero(timeLeftObj[elemDatasetKey]);
    });
    if (!calculatedLeftTime(this) || calculatedLeftTime(this) < 0) {
      clearInterval(intervalId);
      Notify.info('Information. Event Time Now!');
    }
  }, 1000);
}

function calculatedLeftTime(userDateMs) {
  return userDateMs - Date.parse(new Date());
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
