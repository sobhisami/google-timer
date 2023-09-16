// Timer variables
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

// Stopwatch variables
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

function openTab(tabName) {
    // Hide all tab contents
    document.getElementById("timerTab").style.display = "none";
    document.getElementById("stopwatchTab").style.display = "none";

    // Show the selected tab content
    document.getElementById(tabName + "Tab").style.display = "block";
}

function startTimer() {
    if (!timerRunning) {
        const input = document.getElementById("timerInput").value;
        const timeInSeconds = parseInt(input, 10);

        if (!isNaN(timeInSeconds)) {
            timerSeconds = timeInSeconds;
            timerInterval = setInterval(updateTimer, 1000);
            timerRunning = true;
        }
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function updateTimer() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timerSeconds <= 0) {
        stopTimer();
    } else {
        timerSeconds--;
    }
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        stopwatchRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    const stopwatchDisplay = document.getElementById("stopwatchDisplay");
    stopwatchDisplay.textContent = "00:00:00";
}

function updateStopwatch() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    const stopwatchDisplay = document.getElementById("stopwatchDisplay");
    stopwatchDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    stopwatchSeconds++;
}
