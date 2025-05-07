document.getElementById('start').addEventListener('click', () => {
  const minutes = parseInt(document.getElementById('minutes').value);
  if (isNaN(minutes) || minutes <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.runtime.sendMessage({ tabId: tabId, delayMinutes: minutes });
  });

  let timeLeft = minutes * 60;
  const countdownEl = document.getElementById('countdown');

  const interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownEl.textContent = 'Tab will close now...';
    } else {
      const min = Math.floor(timeLeft / 60);
      const sec = timeLeft % 60;
      countdownEl.textContent = `Time Left: ${min}m ${sec}s`;
      timeLeft--;
    }
  }, 1000);
});