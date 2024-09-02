"use strict";

const time = { min: 1, sec: 25 };
const timeDiv = document.createElement("div");
timeDiv.innerHTML = `${String(time.min).padStart(2, "0")} : ${String(
  time.sec
).padStart(2, "0")}`;

const container = document.body.getElementsByClassName("container")[0];
container.appendChild(timeDiv);

//debugger

function countDown(min, sec) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (min === 0 && sec === 0) {
        clearInterval(interval);
        resolve();
      } else if (sec === 0) {
        min--;
        sec = 59;
      } else {
        sec--;
      }

      time.min = min;
      time.sec = sec;

      timeDiv.innerHTML = `${String(min).padStart(2, "0")} : ${String(
        sec
      ).padStart(2, "0")}`;
    }, 1000);
  });
}

countDown(time.min, time.sec)
  .then(() => {
    console.log("Countdown stopped");
  })
  .catch(() => {
    console.log("Error");
  });
