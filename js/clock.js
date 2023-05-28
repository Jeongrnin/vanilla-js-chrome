const date = document.querySelector("#date");
const clock = document.querySelector("#clock");

function getClock() {
  const today = new Date();

  const months = today.getMonth() + 1;
  const dates = today.getDate();
  const days = today.getDay();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  list_days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  date.innerText = `${list_days[days]} ${months} / ${dates}`;
  clock.innerText = `${hours} ${minutes}`;
}

getClock();
setInterval(getClock, 1000);
