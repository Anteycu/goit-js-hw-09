import { Notify } from 'notiflix/build/notiflix-notify-aio';

class PromisePlugin {
  submit(e) {
    e.preventDefault();
    const { delay, step, amount } = e.currentTarget.elements;

    const pDelayNum = Number(delay.value);
    const pStepNum = Number(step.value);
    const pAmountNum = Number(amount.value);

    this.promiseCaller(pDelayNum, pStepNum, pAmountNum);
  }

  promiseCaller(delay, step, amount) {
    let delayCounter = delay;
    for (let i = 1; i <= amount; i += 1) {
      this.createPromise(i, delayCounter)
        .then(({ position, delay }) => {
          this.success(position, delay);
        })
        .catch(({ position, delay }) => {
          this.failure(position, delay);
        });

      delayCounter += step;
    }
  }

  createPromise(position, delay) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          // Fulfill
          res({ position, delay });
        } else {
          // Reject
          rej({ position, delay });
        }
      }, delay);
    });
  }

  success(position, delay) {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
      clickToClose: true,
    });
  }

  failure(position, delay) {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
      clickToClose: true,
    });
  }
}

export default PromisePlugin;
