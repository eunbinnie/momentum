// variable 변수
const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

let myName = 'eunbin';
console.log('hello ' + myName); // hello eunbin

myName = 'eunbinlee';
console.log('your new name is ' + myName);  // your new name is eunbinlee
console.log('---------------------------');


// array(배열)
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);
console.log('---------------------------');


// objects(객체)
const player = {
  name: "binnie",
  points: 10,
  fat: true,
};

console.log(player);
player.points = player.points + 15;
console.log(player.points);
console.log('---------------------------');


// function
const player2 = {
  name: 'nico',

  sayHello(otherPersonsName) {
    console.log(`hello ${otherPersonsName} nice to meet you!`);
  },
};

player2.sayHello('lynn');
player2.sayHello('nico');

function plus(a, b) {
  console.log(a + b);
}
plus(4, 6);
console.log('---------------------------');


// calculator challenge

const calculator = {
  add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
  },

  minus(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
  },

  multi(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
  },

  div(a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
  },

  powerof(a, b) {
    console.log(`${a} ^ ${b} = ${a ** b}`);
  },
};

calculator.add(1, 2);
calculator.minus(7, 4);
calculator.multi(3, 9);
calculator.div(8, 2);
calculator.powerof(2, 6);