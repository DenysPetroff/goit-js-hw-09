import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const selectors = {
    inputDataPicker: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
  daysLeft: document.querySelector('.value[data-days]'),
  hoursLeft: document.querySelector('.value[data-hours]'),
  minutesLeft: document.querySelector('.value[data-minutes]'),
  secLeft: document.querySelector('.value[data-seconds]')
}
selectors.buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(selector, options)