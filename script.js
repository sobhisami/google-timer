const display = document.getElementById("display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let startTime, elapsedTime = 0, isRunning = false, stopwatchInterval;

function toggleStartStopwatch() {
  if (isRunning) {
    clearInterval(stopwatchInterval);
    startButton.textContent = "Resume";
  } else {
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(updateStopwatch, 10);
    startButton.textContent = "Pause";
  }
  isRunning = !isRunning;
}

function stopStopwatch() {
  if (isRunning) {
    clearInterval(stopwatchInterval);
    isRunning = false;
    startButton.textContent = "Start";
  }
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  startButton.textContent = "Start";
}

function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const format = (value) => value.toString().padStart(2, "0");
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return `${format(hours)}:${format(minutes)}:${format(seconds)}.${format(milliseconds)}`;
}

startButton.addEventListener("click", toggleStartStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
