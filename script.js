const txtTimer = document.getElementById('timer');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
let interval, start, pause = 0;

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    start = Date.now() - pause;
    interval = setInterval(() => {
        let ms = Date.now() - start;
        txtTimer.textContent = new Date(Date.now() - start).toISOString().substr(14, 9);
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
    txtTimer.textContent = '00:00:000';
    clearInterval(interval);
});
