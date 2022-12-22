import getCurrentDate from '../modules/getCurrentDate.js'

const oneSecond = 1000;

let date;
let sessionTime = 0;
let countdownName;
let countdownDate;
let countdownTime;

let sessionTimer = document.querySelector('#session-time');
sessionTimer.textContent = sessionTime;

let newContentBody = document.querySelector('.countdown-creator-container');

let countdownCreatorForm = document.querySelector('#countdown-creator')

let surpriseText = document.querySelector('#surprise-text')

let countdownCurrentDate = document.querySelector('#countdown-current-date')

let countdownNameInput = document.querySelector('#countdown-name')

let countdownDateInput = document.querySelector('#countdown-date')

let countdownTimeInput = document.querySelector('#countdown-time')

countdownNameInput.addEventListener('change', (e) => {
  countdownName = e.currentTarget.value;
  console.log(countdownName);
})

countdownDateInput.addEventListener('change', (e) => {
  countdownDate = e.currentTarget.value;
  console.log(countdownDate);
})

countdownTimeInput.addEventListener('change', (e) => {
  countdownTime = e.currentTarget.value;
  console.log(countdownTime);
})

countdownCreatorForm.addEventListener('submit', createCountdown);

const updateTimer = () => {
  sessionTime++;
  let minutes = Math.floor(sessionTime / 60);
  let seconds = sessionTime - (minutes * 60)
  sessionTimer.textContent = `${minutes} minutes(s) and ${seconds} second(s)`;
}

const displayNewContent = () => {
  
  surpriseText.classList.add('slide-out-right');
  newContentBody.classList.remove('hidden');
  newContentBody.classList.add('slide-in-from-left');

  setTimeout(() => {
    surpriseText.textContent = "Create a Countdown"
  }, 500)
}

const displayCurrentDate = () => {
  
  date = getCurrentDate();

  let month = date.toLocaleString('default', {month: 'long'})
  let day = date.getDay()
  let year = date.getFullYear();
  let time = date.toLocaleTimeString();

  countdownCurrentDate.textContent = `The current date is ${month} ${day}, ${year} at ${time}`
}

function createCountdown(e) {
  e.preventDefault();
  console.log(e.target);
}

setTimeout(displayNewContent, 5000);
setInterval(updateTimer, oneSecond);
setInterval(displayCurrentDate, oneSecond);

updateTimer();