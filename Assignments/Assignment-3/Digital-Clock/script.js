const clock = document.querySelector("#clock");
const dateText = document.querySelector("#date");

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
  dateText.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

updateClock();
setInterval(updateClock, 1000);
