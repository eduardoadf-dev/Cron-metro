
const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
const powerBtn = document.getElementById('power');
const markBtn = document.getElementById('mark'); // Botão de marcar

let intervalId = null;
let elapsedTime = 0; 
let startTime = 0;   

const formatTime = (ms) => {
    const totalCentiseconds = Math.floor(ms / 10);
    const hours = Math.floor(totalCentiseconds / 360000);
    const minutes = Math.floor((totalCentiseconds % 360000) / 6000);
    const seconds = Math.floor((totalCentiseconds % 6000) / 100);
    const hundredths = totalCentiseconds % 100;
    const pad = (n) => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(hundredths)}`;
}

const updateMarkButton = () => { // Atualiza o estado visual do botão de marcar
    if (intervalId === null) {
        markBtn.classList.add('disabled');
    } else {
        markBtn.classList.remove('disabled');
    }
}

const toggleTimer = () => {
    const action = powerBtn.getAttribute('action');

    if (action === 'start' || action === 'continue') {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timerEl.innerText = formatTime(elapsedTime);
        }, 10);
        powerBtn.setAttribute('action', 'pause');
        powerBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        clearInterval(intervalId);
        intervalId = null; // Importante para a lógica de desativar
        powerBtn.setAttribute('action', 'continue');
        powerBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    updateMarkButton(); // Atualiza o botão após clicar
}

const markTime = () => {
    // Bloqueia a função se o cronômetro estiver parado ou zerado
    if (elapsedTime === 0 || intervalId === null) return;

    const p = document.createElement('p');
    p.classList.add('mark');
    const markCount = marksList.children.length + 1;
    p.innerHTML = `<strong>Marca ${markCount}</strong> <span>${formatTime(elapsedTime)}</span>`;
    marksList.prepend(p);
}

const resetTimer = () => {
    clearInterval(intervalId);
    intervalId = null; 
    elapsedTime = 0;
    timerEl.innerText = "00:00:00:00";
    marksList.innerHTML = '';
    powerBtn.setAttribute('action', 'start');
    powerBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    updateMarkButton(); // Atualiza o botão após o reset
}

const clearMarks = () => {
    marksList.innerHTML = '';
};

powerBtn.addEventListener('click', toggleTimer); // Eventos
markBtn.addEventListener('click', markTime);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('clear-marks').addEventListener('click', clearMarks);

updateMarkButton(); // Inicializa o botão como desativado ao carregar a página