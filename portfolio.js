const taskTracker = document.getElementById('task-tracker');
const taskTrackerP = document.getElementById('task-tracker-p');
const weatherApp = document.getElementById('weather-app');
const weatherAppP = document.getElementById('weather-app-p');
const footballGame = document.getElementById('football-game');
const footballGameP = document.getElementById('football-game-p');

taskTracker.addEventListener('click', () => {
    taskTrackerP.classList.toggle('open');
})

weatherApp.addEventListener('click', () => {
    weatherAppP.classList.toggle('open');
})

footballGame.addEventListener('click', () => {
    footballGameP.classList.toggle('open');
})