function updateCountdown() {
    const examDate = new Date('2025-05-04T08:00:00');
    const now = new Date();
    const totalSecondsLeft = Math.floor((examDate - now) / 1000);

    if (totalSecondsLeft < 0) {
        document.querySelector('.countdown').innerHTML = "<h2>The exam has passed!</h2>";
        return;
    }

    const days = Math.floor(totalSecondsLeft / (3600 * 24));
    const hours = Math.floor((totalSecondsLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSecondsLeft % 3600) / 60);
    const seconds = totalSecondsLeft % 60;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('total-seconds').textContent = totalSecondsLeft;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();
