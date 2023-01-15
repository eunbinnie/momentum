const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// site load 되자마자 시간 출력 위해서
getClock();
// setInterval(function name, time)
setInterval(getClock, 1000);

// setTimeout(function, time)
// setTimeout(getClock, 5000);
