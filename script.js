document.addEventListener("DOMContentLoaded", () => {

 /* =========================================================
   WEDDING COUNTDOWN
   Target: 28 November 2026, 12:00 South African time (UTC+2)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date("2026-11-28T12:00:00+02:00").getTime();

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateCountdown() {
        const distance = targetDate - Date.now();

        if (distance <= 0) {
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
            return;
        }

        daysEl.textContent = String(
            Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");

        hoursEl.textContent = String(
            Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            )
        ).padStart(2, "0");

        minutesEl.textContent = String(
            Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            )
        ).padStart(2, "0");

        secondsEl.textContent = String(
            Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
