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

function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return "Good morning";
    } else if (hour >= 12 && hour < 17) {
        return "Good afternoon";
    } else if (hour >= 17 && hour < 21) {
        return "Good evening";
    } else {
        return "Good night";
    }
}

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
        heading.textContent = `${getGreeting()}! Current Date & Time: ${formatted}`;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);