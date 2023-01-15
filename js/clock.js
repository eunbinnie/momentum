const clock = document.querySelector("#clock");

function sayHello() {
  console.log("Hello");
}

// setInterval(function name, time)
setInterval(sayHello, 5000);