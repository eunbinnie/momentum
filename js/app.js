// // variable 변수
// const a = 5;
// const b = 2;

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// let myName = 'eunbin';
// console.log('hello ' + myName); // hello eunbin

// myName = 'eunbinlee';
// console.log('your new name is ' + myName);  // your new name is eunbinlee
// console.log('---------------------------');


// // array(배열)
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// console.log(daysOfWeek);

// // Get Item from Array
// console.log(daysOfWeek[4]);

// // Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);
// console.log('---------------------------');


// // objects(객체)
// const player = {
//   name: "binnie",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// player.points = player.points + 15;
// console.log(player.points);
// console.log('---------------------------');


// // function
// const player2 = {
//   name: 'nico',

//   sayHello(otherPersonsName) {
//     console.log(`hello ${otherPersonsName} nice to meet you!`);
//   },
// };

// player2.sayHello('lynn');
// player2.sayHello('nico');

// function plus(a, b) {
//   console.log(a + b);
// }
// plus(4, 6);
// console.log('---------------------------');


// // calculator challenge

// const calculator = {
//   add(a, b) {
//     console.log(`${a} + ${b} = ${a + b}`);
//   },

//   minus(a, b) {
//     console.log(`${a} - ${b} = ${a - b}`);
//   },

//   multi(a, b) {
//     console.log(`${a} * ${b} = ${a * b}`);
//   },

//   div(a, b) {
//     console.log(`${a} / ${b} = ${a / b}`);
//   },

//   powerof(a, b) {
//     console.log(`${a} ^ ${b} = ${a ** b}`);
//   },
// };

// calculator.add(1, 2);
// calculator.minus(7, 4);
// calculator.multi(3, 9);
// calculator.div(8, 2);
// calculator.powerof(2, 6);
// console.log('---------------------------');


// // return
// const age = 96;
// function calculateKrAge(ageOfRoreigner) {
//   return ageOfRoreigner + 2;
// }

// const KrAge = calculateKrAge(age);

// console.log(KrAge);
// console.log('---------------------------');


// // return calculator

// const calculatorReturn = {
//   sum(a, b) {
//     return a + b;
//   },

//   sub(a, b) {
//     return a - b;
//   },

//   multi(a, b) {
//     return a * b;
//   },

//   div(a, b) {
//     return a / b;
//   },

//   power(a, b) {
//     return a ** b;
//   },
// };

// const sumResult = calculatorReturn.sum(2, 3);
// console.log(sumResult);

// const subResult = calculatorReturn.sub(2, 3);
// console.log(subResult);

// const multiResult = calculatorReturn.multi(2, 3);
// console.log(multiResult);

// const divResult = calculatorReturn.div(2, 3);
// console.log(divResult);

// const powerResult = calculatorReturn.power(2, 3);
// console.log(powerResult);
// console.log('---------------------------');


// // age calculator
// {

//   const age = parseInt(prompt("How old are you?"));

//   if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number.");  // is not a number
//   } else if (age < 18) {
//     console.log("You ar too young.");
//   } else if (age >= 18 && age <= 50) {
//     console.log("You can drink.")
//   } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
//   } else if (age === 100) {
//     console.log("wow you are wise");
//   } else if (age > 80) {
//     console.log("You can do whatever you want.");
//   }


// }

// id로 가져오기
// {

//   const title = document.getElementById("title");
//   console.log(title);
//   console.dir(title);

//   title.innerText = "Click me!";
//   title.style.color = "blue";

//   console.log(title.className);
//   console.log(title.id);

//   // class로 가져오기
//   const user = document.getElementsByClassName("name");
//   console.log(user);

//   // tag name으로 가져오기
//   const title2 = document.getElementsByTagName("h1");
//   console.log(title2);

//   // querySelector
//   const title3 = document.querySelector(".text h1");
//   console.log(title3);

//   //querySelectorAll
//   const title4 = document.querySelectorAll(".text h1");
//   console.log(title4);

// }


// // event listener
// {

//   const h1 = document.querySelector("#title");

//   function handleTitleClick() {
//     h1.style.color = "red";
//     console.log("title was clicked!");
//   }

//   function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
//   }

//   function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
//   }

//   function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
//   }

//   function handleWindowCopy() {
//     alert("copier!");
//   }

//   function handleWindowOffline() {
//     alert("SOS no WIFI");
//   }

//   function handleWindowOnline() {
//     alert("ALL GOOD");
//   }

//   h1.addEventListener('click', handleTitleClick);
//   h1.addEventListener('mouseenter', handleMouseEnter);
//   h1.addEventListener('mouseleave', handleMouseLeave);

//   window.addEventListener('resize', handleWindowResize);
//   window.addEventListener('copy', handleWindowCopy);
//   window.addEventListener('offline', handleWindowOffline);
//   window.addEventListener('online', handleWindowOnline);

// }


// CSS in Javascript part 1
// {

//   const h1 = document.querySelector("#title");

//   function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;

//     if (currentColor === "blue") {
//       newColor = "tomato";
//     } else {
//       newColor = "blue";
//     }
//     h1.style.color = newColor;
//   }

//   h1.addEventListener('click', handleTitleClick);

// }


// CSS in Javascript part 2
// {

//   const h1 = document.querySelector("h1");

//   function handleTitleClick() {
//     const clickedClass = "clicked";

//     if (h1.className === clickedClass) {
//       h1.className = "";
//     } else {
//       h1.className = clickedClass;
//     }
//   }

//   h1.addEventListener('click', handleTitleClick);

// }


// CSS in Javascript part 3(1)
// {

//   const h1 = document.querySelector("h1");

//   function handleTitleClick() {
//     const clickedClass = "clicked";

//     if (h1.classList.contains(clickedClass)) {
//       h1.classList.remove(clickedClass);
//     } else {
//       h1.classList.add(clickedClass);
//     }
//   }

//   h1.addEventListener('click', handleTitleClick);

// }


// CSS in Javascript part 3(2)
{

  const h1 = document.querySelector("#title");

  // function handleTitleClick() {
  //   h1.classList.toggle("clicked");
  // }

  // h1.addEventListener('click', handleTitleClick);

  h1.addEventListener('click', function () {
    h1.classList.toggle("clicked");
  });

}