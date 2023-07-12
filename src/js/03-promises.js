import Notiflix from 'notiflix';

const selectors = {
  form: document.querySelector('.form'),
  firstDelayInput: document.querySelector('input[name="delay"]'),
  delayStepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('button[type="submit"]')
}
 
selectors.form.addEventListener('submit', event => event.preventDefault());

selectors.submitBtn.addEventListener('click', handleSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


function handleSubmit() { 
  const delayInputValue = Number(selectors.firstDelayInput.value);
  const stepInputValue = Number(selectors.delayStepInput.value);
  const amountValue = Number(selectors.amountInput.value);

  for (let i = 0; i < amountValue; i += 1) { 
     const position = i + 1;
    const delay = delayInputValue + i * stepInputValue;
    createPromise(position, delay)
  .then(({ position, delay }) => {
     Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
         Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
};





