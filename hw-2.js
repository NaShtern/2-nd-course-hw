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
let i = 0;
while (i < 2) {
  console.log("Привет");
  i++;
}
  */

/* Задание 2
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
  */

/* Задание 3
for (let i = 7; i <= 22; i++) {
  console.log(i);
}
  */

/* Задание 4
const obj = {
  n: "200",
  v: "300",
  p: "400",
};

for (const key in obj) {
  console.log(`${key} - ${obj[key]}`);
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

/* Задание 6 */
let dayFriday = 1;
let allDay = 31;

for (let i = dayFriday; i <= allDay; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}
