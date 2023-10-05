// Function to update the countdown
function updateCountdown() {
    // Set the end date for the countdown (owner can change this if necessary)
    const endDate = new Date("2065-03-02T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Time's up!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
