import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const selectors = {
    inputDatePicker: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
  daysLeft: document.querySelector('.value[data-days]'),
  hoursLeft: document.querySelector('.value[data-hours]'),
  minutesLeft: document.querySelector('.value[data-minutes]'),
  secLeft: document.querySelector('.value[data-seconds]')
}
selectors.buttonStart.disabled = true;

let selectedDate;
let currentDate;
// console.log('currentDate', currentDate);

// selectors.buttonStart.addEventListener('click', timer);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0])
    selectedDate = selectedDates[0].getTime();
    currentDate = new Date(); 
    if (selectedDate >= currentDate) {
      selectors.buttonStart.disabled = false; 
      selectors.buttonStart.addEventListener('click', timer);
   
  } else { 
    Notiflix.Notify.failure('Please choose a date in the future');
  }
  },
};

flatpickr(selectors.inputDatePicker, options);


// function wrongDate() { 
//   if (selectedDate >= currentDate) {
//    selectors.buttonStart.disabled = false; 
   
//   } else { 
//     Notiflix.Notify.failure('Please choose a date in the future');
//   }

// }

function timer() { 
  selectors.buttonStart.disabled = true;
  let differenceTime = selectedDate - currentDate;
  console.log(differenceTime);
  const intervalId = setInterval(() => {
    differenceTime -= 1000;
    const { days, hours, minutes, seconds } = convertMs(differenceTime);
    
    selectors.daysLeft.textContent = days;
    selectors.hoursLeft.textContent = hours;
    selectors.minutesLeft.textContent = minutes;
    selectors.secLeft.textContent = seconds;
    
    if (differenceTime < 1000) {
      clearInterval(intervalId);
    }

  }, 1000);


}

function convertMs(ms) {
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