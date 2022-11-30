import getCurrentDate from '../js/getCurrentDate.js'

const oneSecond = 1000;

let date;
let sessionTime = 0;
let countdownDate;
let countdownTime;

let sessionTimer = document.querySelector('#session-time');
sessionTimer.textContent = sessionTime;

let newContentBody = document.querySelector('.countdown-creator-container');

let surpriseText = document.querySelector('#surprise-text')

let countdownCurrentDate = document.querySelector('#countdown-current-date')

let countdownDateInput = document.querySelector('#countdown-date')

let countdownTimeInput = document.querySelector('#countdown-time')

countdownDateInput.addEventListener('change', (e) => {
  countdownDate = e.currentTarget.value;
  console.log(countdownDate);
})

countdownTimeInput.addEventListener('change', (e) => {
  countdownTime = e.currentTarget.value;
  console.log(countdownTime);
})

const updateTimer = () => {
  sessionTime++;
  let minutes = Math.floor(sessionTime / 60);
  let seconds = sessionTime - (minutes * 60)
  sessionTimer.textContent = `${minutes} minutes(s) and ${seconds} second(s)`;
  setTimeout(updateTimer, oneSecond);
}

const displayNewContent = () => {
  
  surpriseText.classList.add('slide-out-right');
  newContentBody.classList.remove('hidden');
  newContentBody.classList.add('slide-in-from-left');

  setTimeout(() => {
    surpriseText.textContent = "Create a Countdown"
  }, 500)
  
  displayCurrentDate();
}

const displayCurrentDate = () => {
  
  date = getCurrentDate();

  let month = date.toLocaleString('default', {month: 'long'})
  let day = date.getDay()
  let year = date.getFullYear();
  let time = date.toLocaleTimeString();

  countdownCurrentDate.textContent = `The current date is ${month} ${day}, ${year} at ${time}` 

  setTimeout(displayCurrentDate, oneSecond)
}

setTimeout(displayNewContent, oneSecond);

updateTimer();