const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// site load 되자마자 시간 출력 위해서
getClock();
// setInterval(function name, time)
setInterval(getClock, 1000);

// setTimeout(function, time)
// setTimeout(getClock, 5000);
