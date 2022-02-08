const startBtnEl = document.querySelector('[data-start]')
const stopBtnEl = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')
startBtnEl.addEventListener('click', onBtnStartClick)
stopBtnEl.addEventListener('click', onBtnStopClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timeId
function onBtnStartClick() {
    timeId = setInterval(() => { bodyEl.style.backgroundColor = getRandomHexColor(); }, 1000);
        startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
}
function onBtnStopClick() {
    clearInterval(timeId);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
};