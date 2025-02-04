let timer;
let secondsElapsed = 0;
let isTimerRunning = false;

const timerElement = document.querySelector('.scheme__timer');
console.log(timerElement);
const schemeField = document.querySelector('.scheme__field');

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
}

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timer = setInterval(() => {
      secondsElapsed++;
      timerElement.textContent = formatTime(secondsElapsed);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

export function showHoorayMessage() {
  stopTimer();
  return secondsElapsed;
}
// startTimer();
// schemeField.addEventListener('click', (event) => {
//   startTimer();
//   //   if (event.target.classList.contains('hint')) {
//   //     startTimer();
//   //   }
// });
