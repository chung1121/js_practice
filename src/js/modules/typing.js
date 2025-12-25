const startPage = document.querySelector('#ty-start-page');
const typingGame = document.querySelector('#ty-game');
const titleTime = document.querySelector('#ty-title-time');
const timer = document.querySelector('#ty-timer');
const timeSelectEl = document.querySelector('.ty-time-select');

let timelimit = 30;
let remainingTime;

timeSelectEl.addEventListener('change', () => {
  timelimit = timeSelectEl.Value;
});
window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    start();
  }
  return;
});

function start() {
  startPage.classList.remove('show');
  typingGame.classList.add('show');
  titleTime.textContent = timelimit;
  remainingTime = timelimit;
}
