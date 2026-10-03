function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const heading = document.getElementById("datetime-heading");
    if (heading) {
        heading.textContent = "Current Date & Time: " + formatted;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);