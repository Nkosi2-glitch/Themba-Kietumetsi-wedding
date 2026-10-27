
document.addEventListener("DOMContentLoaded", function () {

    // Wedding date and time: 28 November 2026 at 12:00
    // South African time is UTC+2.
    const weddingDate = new Date(
        "2026-11-28T12:00:00+02:00"
    ).getTime();

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    // Stop safely if the countdown elements are missing.
    if (!days || !hours || !minutes || !seconds) {
        console.error("Wedding countdown elements could not be found.");
        return;
    }

    function updateCountdown() {
        const difference = weddingDate - Date.now();

        if (difference <= 0) {
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
            return;
        }

        const remainingDays = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const remainingHours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const remainingMinutes = Math.floor(
            (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const remainingSeconds = Math.floor(
            (difference % (1000 * 60)) / 1000
        );

        days.textContent = String(remainingDays).padStart(2, "0");
        hours.textContent = String(remainingHours).padStart(2, "0");
        minutes.textContent = String(remainingMinutes).padStart(2, "0");
        seconds.textContent = String(remainingSeconds).padStart(2, "0");
    }

    // Show the countdown immediately, then refresh every second.
    updateCountdown();
    setInterval(updateCountdown, 1000);

});
