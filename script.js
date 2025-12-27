let startTime = 0;
let elapsedTime = 0;
let timer = null;
let laps = [];

const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

function formatTime(ms) {
    let milliseconds = ms % 1000;
    let totalSeconds = Math.floor(ms / 1000);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / 3600);

    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}.${String(milliseconds).padStart(3,'0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function start() {
    if (!timer) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

function stop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    laps = [];
    updateDisplay();
    lapsList.innerHTML = '';
}

function lap() {
    if (timer) {
        laps.push(elapsedTime);
        const li = document.createElement('li');
        li.textContent = `Lap ${laps.length}: ${formatTime(elapsedTime)}`;
        lapsList.appendChild(li);
    }
}

// Event listeners
document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);
