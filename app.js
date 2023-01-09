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
console.log('---------------------------');


// return
const age = 96;
function calculateKrAge(ageOfRoreigner) {
  return ageOfRoreigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);
console.log('---------------------------');


// return calculator

const calculatorReturn = {
  sum(a, b) {
    return a + b;
  },

  sub(a, b) {
    return a - b;
  },

  multi(a, b) {
    return a * b;
  },

  div(a, b) {
    return a / b;
  },

  power(a, b) {
    return a ** b;
  },
};

const sumResult = calculatorReturn.sum(2, 3);
console.log(sumResult);

const subResult = calculatorReturn.sub(2, 3);
console.log(subResult);

const multiResult = calculatorReturn.multi(2, 3);
console.log(multiResult);

const divResult = calculatorReturn.div(2, 3);
console.log(divResult);

const powerResult = calculatorReturn.power(2, 3);
console.log(powerResult);
console.log('---------------------------');


// age calculator
{

  const age = parseInt(prompt("How old are you?"));

  if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");  // is not a number
  } else if (age < 18) {
    console.log("You ar too young.");
  } else if (age >= 18 && age <= 50) {
    console.log("You can drink.")
  } else if (age > 50 && age <= 80) {
    console.log("You should exercise");
  } else if (age === 100) {
    console.log("wow you are wise");
  } else if (age > 80) {
    console.log("You can do whatever you want.");
  }


}