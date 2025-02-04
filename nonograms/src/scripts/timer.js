let timer;
let isStartedTimer = false;
export let secondsElapsed = 0;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `time: ${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
}

export function startTimer(timerElement) {
  if (!isStartedTimer) {
    isStartedTimer = true;
    timer = setInterval(() => {
      secondsElapsed++;
      timerElement.textContent = formatTime(secondsElapsed);
    }, 1000);
  }
}

export function stopTimer() {
  clearInterval(timer);
  isStartedTimer = false;
}

export function resetTimer(timerElement) {
  secondsElapsed = 0;
  timerElement.textContent = formatTime(secondsElapsed);
}

export function showHoorayMessage() {
  stopTimer();
  return formatTime(secondsElapsed);
}
