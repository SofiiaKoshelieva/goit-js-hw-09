import Notiflix from 'notiflix';
const formEl = document.querySelector('.form')
const btnEl = document.querySelector('button')
const inputDelayEl = document.querySelector('input[name="delay"]')
const inputStepEl = document.querySelector('input[name = "step"]')
const inputAmountEl = document.querySelector('input[name = "amount"]')
formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault();
  const delay = +inputDelayEl.value; // перваяотсрочка вызова ф-ции
  const step = +inputStepEl.value; // шаг изменения отсрочки
  const amount = +inputAmountEl.value
  for (let i = 0; i < amount; i += 1) {
    const currentPosition = i + 1; // текущая позиция промиса (номер промиса)
    const currentDelay = delay + i * step;
     createPromise(currentPosition, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`,
          {
            timeout: 8000,
          },);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay} ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`,
          {
            timeout: 8000,
          },);
      });
    }

  e.currentTarget.reset();
  btnDisable();
};
function createPromise(position, delay) {
  const promises = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
      
        resolve({ position, delay });
      } else {
     
        reject({ position, delay });
      };
    }, delay);
  });
  return promises;
};


