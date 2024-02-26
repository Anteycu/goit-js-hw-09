import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formRef = document.querySelector('.form');
formRef.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;

  promiseCaller(Number(delay.value), Number(step.value), amount.value);
}

function promiseCaller(delay, step, amount) {
  let counterOfDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, counterOfDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          clickToClose: true,
        });
      });

    counterOfDelay += step;
  }
}

function createPromise(position, delay) {
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
