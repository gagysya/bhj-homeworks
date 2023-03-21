const timer = document.getElementById('timer');
function start() {
	let setIntervalId = setInterval(() => {
    timer.textContent -= 1;
    if (timer.textContent === '0') {
      alert('You have won the competition!');
      clearInterval(setIntervalId);
    }
  }, 1000);
}