import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('[data-start]')
const inputEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');


inputEl.addEventListener('focus', onInputChange);
startBtnEl.addEventListener('click', onBtnStartClick)


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = Date.now();
console.log(selectedDates[0])
        if (selectedDates[0] <= currentDate) {
            return Notiflix.Report.warning('WARNING',"Please choose a date in the future",'OK')
            
        }
        startBtnEl.disabled = false;
        return chosenDate = selectedDates[0];
        
  },
};

let chosenDate
let timeId
startBtnEl.disabled = true;

 function onInputChange(){
     flatpickr(inputEl, options)
 }
function onBtnStartClick() {
    timeId = setInterval(counter, 1000);
    stertBtnEl.disabled = true;
};
function counter() {
    const currentDate = Date.now();
    if (chosenDate > currentDate) {
        return change(convertMs(chosenDate - currentDate));
    };

    clearInterval(timeId);
};
function change({ days, hours, minutes, seconds }) {
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
};
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
 return { days, hours, minutes, seconds };

}
