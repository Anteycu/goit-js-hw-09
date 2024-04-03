import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Timer {
  constructor(timerOutputHandler) {
    this.chosenDate = null;
    this.onTick = timerOutputHandler;
    this.isActive = false;
  }

  setDate(selectedDate) {
    const parsedChosDate = Date.parse(selectedDate[0]);
    const futureTimeStamp = this.validatingDate(parsedChosDate);
    futureTimeStamp && (this.chosenDate = futureTimeStamp);
    return futureTimeStamp;
  }

  start() {
    if (this.isActive) {
      Notify.warning('Warning. Timer already set and active.');
      return;
    }

    const intervalId = setInterval(() => {
      this.isActive = true;
      const timeLeft = this.calcLeftTime(this.chosenDate);

      if (!timeLeft || timeLeft < 0) {
        clearInterval(intervalId);
        this.isActive = false;
        Notify.info('Information. Event Time Now!');
        return;
      }

      const timeLeftObj = this.convertMs(timeLeft);
      this.onTick(timeLeftObj, this.pad);
    }, 1000);
  }

  validatingDate(date) {
    if (Date.now() > date) {
      Notify.failure('Failure. Please choose a date in the future', {
        clickToClose: true,
      });
      return;
    }

    return date;
  }

  calcLeftTime(userDateMs) {
    return userDateMs - Date.now();
  }

  pad(value) {
    return value.toString().padStart(2, '0');
  }

  convertMs(ms) {
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
}

export default Timer;
