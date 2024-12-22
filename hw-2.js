/*Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
*/

/* Задание 2
const date = 2007;
alert(date);
*/

/* Задание 3
const nameJs = "Брендан Эйх";
alert(nameJs);
*/

/* Задание 4 сумма
let a = 10;
let b = 2;
let sum = a + b;
alert(sum);
*/

/* Задание 4 разность
let a = 10;
let b = 2;
let difference = a - b;
alert(difference);
*/

/* Задание 4 произведение
let a = 10;
let b = 2;
let product = a * b;
alert(product);
*/

/* Хадание 4 частное
let a = 10;
let b = 2;
let quotient = a / b;
alert(quotient);
*/

/* Задание 5
let result = 2 ** 5;
alert(result);
*/

/* Задание 6
let a = 9;
let b = 2;
let remainder = a % b;
alert(remainder);
*/

/* Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
*/

/* Задание 8
let age = prompt("Сколько вам лет?");
alert(age);
*/

/* Задание 9
const user = {
  name: `Александр`,
  age: 28,
  isAdmin: true,
};
*/

/*
let user = prompt("Ваше имя?");
alert(`Привет ${user}!`);
*/

/* Урок 3*/

/* Задание 1
let password = "123";
let use = prompt("Введите пароль");

if (use === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}
*/

/* Задание 2
let c = 5;

if (c > 0 && c < 10) {
  alert("Верно");
} else {
  alert("Неверно");
}
*/

/* Задание 3
let d = 5;
let e = 200;

if (d >= 100 || e >= 100) {
  alert("Верно");
} else {
  alert("Неверно");
}
*/

/* Задание 4
let a = "2";
let b = "3";

alert(Number(a) + Number(b));
*/

/* Задание 5
let monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;

  default:
    alert("Неверно");
    break;
}
    */

/* Урок 4*/

/* Задание 1
for (let i = 0; i < 2; i++) {
  console.log("Привет");
}
*/

/* Задание 2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
  */

/* Задание 3
for (let i = 7; i <= 22; i++) {
  console.log(i);
}
  */

/* Задание 4
const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};

for (const key in obj) {
  console.log(`${key} - ${obj[key]} долларов`);
}
*/

/* Задание 5
let n = 1000;
let num = 0;

while (n > 50) {
  n /= 2;
  console.log(n);
  num++;
}
console.log(`Количество циклов: ${num}`);

*/

/* Задание 6
let dayFriday = 1;
let allDay = 31;

for (let i = dayFriday; i <= allDay; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}
  */

/* Игра Угадай число*/

function guessTheNumberGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  alert("Добро пожаловать в игру 'Угадай число'!");

  while (true) {
    attempts++;
    guess = prompt("Попытка №" + attempts + ". Угадайте число от 1 до 100:");

    if (guess === null) {
      alert("Игра отменена. Загаданное число было: " + secretNumber);
      return;
    }

    if (isNaN(guess)) {
      alert("Пожалуйста, введите число!");
      continue;
    }

    guess = parseInt(guess);

    if (guess === secretNumber) {
      alert(
        "Поздравляю! Вы угадали число " +
          secretNumber +
          " за " +
          attempts +
          " попыток!"
      );
      return;
    } else if (guess < secretNumber) {
      alert("Загаданное число больше!");
    } else {
      alert("Загаданное число меньше!");
    }
  }
}

// guessTheNumberGame();

/* Урок 5 */

/* Задание 1
function task1(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
  console.log(task1(5, 4));
*/

/* Задание 2
const task2 = (number) => (number % 2 == 0 ? "Число четное" : "Число нечетное");

console.log(task2(4));
*/

/* Задание 3
function square(number) {
  console.log(number ** 2);
}

const up = (n) => n ** 2;

square(5);
console.log(up(5));
*/

/* Задание 4
function age() {
  let age = +prompt("Сколько тебе лет?");

  if (age < 0) {
    alert("Возраст не может быть отрицательным");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else if (age >= 13) {
    alert("Добро пожаловать");
  } else {
    alert("Вы ввели неправильное значение");
  }
}

age();
*/

/* Задание 5
function calc(a, b) {
  console.log(isNaN(a));
  console.log(isNaN(b));
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
}

console.log(calc("hello", 2));
*/

/* Задание 6
function getNumber() {
  let number = prompt("Введите число");
  if (isNaN(number)) {
    return "Переданный параметр не является числом";
  } else {
    return `${number} в кубе равняется ${number ** 3}`;
  }
}

console.log(getNumber());
*/

/* Задание 7
function getArea() {
  return Math.PI * this.radius ** 2;
}

function getPerimeter() {
  return 2 * Math.PI * this.radius;
}

const circle1 = {
  radius: 10,
  methodGetArea: getArea,
  methodGetPerimeter: getPerimeter,
};

const circle2 = {
  radius: 20,
  methodGetArea: getArea,
  methodGetPerimeter: getPerimeter,
};

console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());
*/
