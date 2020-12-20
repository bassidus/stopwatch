const txtTimer = document.getElementById('timer');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
let interval, start, pause = 0;

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    start = Date.now() - pause;
    interval = setInterval(() => {
        output(Date.now() - start);
    }, 1);
});

btnStop.addEventListener('click', () => {
    btnStart.disabled = false;
    pause = Date.now() - start;
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    btnStart.disabled = false;
    pause = 0;
    // start = Date.now();
    output(0);
    clearInterval(interval);
});


function output(ms) {
    txtTimer.textContent = new Date(ms).toISOString().substr(14, 9);
}

