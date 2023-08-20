/*
  |============================
  |Блок 2 Завдання  1/32
  |============================
Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

Оголошена функція checkAge(age).
У виразі перевірки віку використаний оператор >=
Виклик checkAge(20) повертає "You are an adult"
Виклик checkAge(8) повертає "You are a minor"
Виклик checkAge(14) повертає "You are a minor"
Виклик checkAge(38) повертає "You are an adult"
В тілі функції є тільки одна інструкція if
В тілі функції відсутні інструкції else або else if
  */
//  function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(20));
/**
  |============================
  |Блок 2 Завдання  2/32
  |============================
Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

видали змінну message
видали else
код повинен працювати так само, як і до оптимізації
Оголошена функція checkPassword(password)
Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
Виклик checkPassword("jqueryismyjam") повертає "Welcome!"


*/
//  function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//      return "Welcome!";
//    }
//      return "Access denied, wrong password!";
//   // Change code above this line
// // let message;

// //   if (password === ADMIN_PASSWORD) {
// //     message = "Welcome!";
// //   } else {
// //     message = "Access denied, wrong password!";
// //   }

//   // return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
/**
  |============================
  |Блок 2 Завдання  3/32
  |============================
Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

Оголошена функція checkStorage(available, ordered)
Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
Виклик checkStorage(70, 0) повертає "Your order is empty!"
Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
Виклик checkStorage(150, 0) повертає "Your order is empty!"
*/
// function checkStorage(available, ordered) {
//   // Change code below this line
//    if (ordered === 0) {
//     return "Your order is empty!";
//    }
//    if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//    }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
/**
  |============================
  |Блок 2 Завдання  4/32
  |============================
Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

Оголошена змінна fruits
Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
*/
// const fruits = ["apple", "plum", "pear", "orange"];
/**
  |============================
  |Блок 2 Завдання  5/32
  |============================
Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

Ім'я змінної	Значення змінної
firstElement	перший елемент масиву
secondElement	другий елемент масиву
lastElement	останній елемент масиву
Оголошена змінна firstElement
Значення змінної firstElement - це рядок "apple"
Оголошена змінна secondElement
Значення змінної secondElement - це рядок "plum"
Оголошена змінна lastElement
Значення змінної lastElement - це рядок "orange"
*/
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
/**
  |============================
  |Блок 2 Завдання  6/32
  |============================
Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

Оголошена змінна fruits
Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];
*/
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);
/**
  |============================
  |Блок 2 Завдання  7/32
  |============================
Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

Оголошена змінна fruitsArrayLength
Значення змінної fruitsArrayLength - це число 4

Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3
*/
// const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength)
/**
  |============================
  |Блок 2 Завдання  8/32
  |============================
Оголоси дві зміні:

Ім'я змінної	Очікуване значення
lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
lastElement	Значення останнього елемента масиву
Оголошена змінна lastElementIndex
Значення змінної lastElementIndex - це число 3
Оголошена змінна lastElement
Значення змінної lastElement - це рядок "banana"

Найчастіше ми заздалегідь у коді не знаємо, яка буде довжина масиву. Для того щоб отримати значення останнього елемента, застосовується наступний підхід - довжина масиву завжди на одиницю більша за індекс останнього елемента. Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву довільної довжини.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"
*/
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);
/**
  |============================
  |Блок 2 Завдання  9/32
  |============================
Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

Оголошена функція getExtremeElements(array)
Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]
*/
// function getExtremeElements(array) {
//   // Change code below this line
//   return array = [array[0], array[array.length - 1]] ;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
/**
  |============================
  |Блок 2 Завдання  10/32
  |============================
Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

Оголошена функція splitMessage(message, delimiter)
Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter. Якщо роздільник - це порожній рядок, отримаємо масив окремих символів. Роздільником може бути один або кілька символів.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]
*/
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
/**
  |============================
  |Блок 2 Завдання  11/32
  |============================
Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

Оголошена функція calculateEngravingPrice(message, pricePerWord)
Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80
*/
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const totalPrice = message.split(" ").length * pricePerWord;
//   return totalPrice;
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 20));
/**
  |============================
  |Блок 2 Завдання  12/32
  |============================
Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

Оголошена функція makeStringFromArray(array, delimiter)
Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. Тобто це зворотна операція методу рядків split(delimiter).

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'
*/
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
/**
  |============================
  |Блок 2 Завдання  13/32
  |============================
Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

Увага
Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

Значенням параметра title будуть рядки, слова яких розділені лише пробілами
Усі символи slug повинні бути у нижньому регістрі
Всі слова slug повинні бути розділені тире
Оголошена функція slugify(title)
Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
Виклик slugify("English for developer") повертає "english-for-developer"
Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"
*/
// function slugify(title) {
//   // Change code below this line
  
//   return title.toLowerCase().replaceAll(' ', '-'); //працює але не приймає
//   //  return title.toLowerCase().split(' ').join('-');
  
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
/**
  |============================
  |Блок 2 Завдання  14/32
  |============================
Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']


Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

firstTwoEls - масив із перших двох елементів
nonExtremeEls - масив з усіх елементів, крім першого та останнього
lastThreeEls - масив із трьох останніх елементів
Оголошена змінна fruits
Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
Оголошена змінна firstTwoEls
Значення змінної firstTwoEls - це масив ["apple", "plum"]
Оголошена змінна nonExtremeEls
Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
Оголошена змінна lastThreeEls
Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами
*/
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);
/**
  |============================
  |Блок 2 Завдання  15/32
  |============================
Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

Оголошена змінна oldClients
Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
Оголошена змінна newClients
Значення змінної newClients - це масив ["Peach", "Houston"]
Оголошена змінна allClients
Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами
*/
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);
/**
  |============================
  |Блок 2 Завдання  16/32
  |============================
Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

Оголошена функція makeArray(firstArray, secondArray, maxLength)
Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив
*/
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// return firstArray.concat(secondArray).slice(0, maxLength);

//     // Change code above this line
// }
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
/**
  |============================
  |Блок 2 Завдання  17/32
  |============================
Цикли використовуються для багаторазового повторення коду. Оголошення циклу for складається з трьох виразів.

for (Ініціалізація; Умова; Пост - вираз) {
  // Тіло циклу
}
Ініціалізація - виконується один раз перед початком циклу. Використовується для створення змінної-лічильника і встановлення її початкового значення.
Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді, коли вираз приводиться до true. Цикл завершується, якщо значення буде false.
Пост-вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови. Використовується для оновлення змінної-лічильника.
Тіло - набір інструкцій для виконання на кожному повторенні. Виконується, якщо вираз умови приводиться до true.
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
В прикладі оголошується змінна i, ініціалізується значенням 0, і цикл виконується (його тіло) доти, доки i <= 20, тобто умова приводиться до true. Після кожної ітерації лічильник збільшується на 5.


Оголошена змінна end
Значення змінної end - це число 7
Оголошена змінна i - лічильник циклу
Початкове значення змінної i дорівнює 3
Умова циклу приводиться до true доти, доки i менше або дорівнює 7
На кожній ітерації значення змінної i збільшується на одиницю
Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7
*/

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
/**
  |============================
  |Блок 2 Завдання  18/32
  |============================
Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

Оголошена функція calculateTotal(number)
Виклик функції calculateTotal(1) повертає 1
Виклик функції calculateTotal(3) повертає 6
Виклик функції calculateTotal(7) повертає 28
Виклик функції calculateTotal(18) повертає 171
Виклик функції calculateTotal(24) повертає 300
Виклик функції calculateTotal() з випадковим числом повертає правильне значення
*/
// function calculateTotal(number) {
//  // Change code below this line
//   let sumRez = 0;
//   if (number === undefined) {
//     number = parseInt(Math.random() * 10);
//     for (let i = 1; i <= number; i += 1) {
//       sumRez = sumRez + i;
//     }
      
//   } else {
//     for (let i = 1; i <= number; i += 1) {
//       sumRez = sumRez + i;
//     }
//    }

// return sumRez

//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());
/**
  |============================
  |Блок 2 Завдання  19/32
  |============================
Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.


Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

Оголошена змінна fruits
Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
Оголошена змінна i - лічильник циклу
Початкове значення змінної i дорівнює 0
Умова циклу приводиться до true доти, доки i менше за 4
На кожній ітерації значення змінної i збільшується на одиницю
В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
В тілі циклу for використовується виведення у консоль змінної fruit
*/
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
/**
  |============================
  |Блок 2 Завдання  20/32
  |============================
Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

Оголошена функція calculateTotalPrice(order)
Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення
*/
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total = total + order[i];
//    }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
/**
  |============================
  |Блок 2 Завдання  21/32
  |============================
Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

Оголошена функція findLongestWord(string)
Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
Виклик функції findLongestWord("Google do a roll") повертає Google
Виклик функції findLongestWord("May the force be with you") повертає force
Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
*/
// function findLongestWord(string) {
//   // Change code below this line
//   let masiv = [];
//   let maxWord = [];
//   masiv = string.split(' ');
//   for (let i = 0; i < masiv.length; i += 1) {
//     if (masiv[i].length < maxWord.length) {
//      continue;
//     }
//      maxWord = masiv[i];
//   }
//   return maxWord;
// }
// console.log(findLongestWord("May the force be with you"));
/**
  |============================
  |Блок 2 Завдання  22/32
  |============================
Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються.

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
-------------------------
Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

Оголошена функція createArrayOfNumbers(min, max)
Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
В циклі for використовувався метод push
*/
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   if (min === undefined) {
//     min = parseInt(Math.random() * 10);
//     max = parseInt(Math.random() * 10);
//     console.log(min, max);
//     for (let i = min; i <= max; i += 1) {
// numbers.push(i);
//   }
//   } else {
// for (let i = min; i <= max; i += 1) {
// numbers.push(i);
//   }
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers());
/**
  |============================
  |Блок 2 Завдання  23/32
  |============================
Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

Оголошена функція filterArray(numbers, value)
Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
В циклі for використовувався метод push
*/
// function filterArray(numbers, value) {
//    // Change code below this line
//   const mass = [];
//   const randMass = [];
//   if (numbers === undefined) {
//     value = parseInt(Math.random() * 10);
//     for (let i = 0; i < value; i += 1) {
//       randMass.push(parseInt(Math.random() * 10));
//     }
//       for (let i = 0; i < randMass.length; i += 1) {
//       if (randMass[i] > value) {
//         mass.push(randMass[i]);
//       } continue;
//     }
//     return mass;
//   }
//   else {
//       for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       mass.push(numbers[i]);
//     } continue;
//   }
//   return mass;

//   }
//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));
/**
  |============================
  |Блок 2 Завдання  24/32
  |============================
Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно. Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція (індекс).

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false

// var randomBoolean;
// console.log(randomBoolean = Math.random() >= 0.5);
// условие ? выражение1 : выражение2

----------------------------------------------------
Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

Доповни код функції таким чином, що якщо:

фрукт присутній в масиві, то функція повертає true;
фрукт відсутній в масиві, то функція повертає false.
Оголошена функція checkFruit(fruit)
Виклик checkFruit("plum") повертає true
Виклик checkFruit("mandarin") повертає false
Виклик checkFruit("pear") повертає true
Виклик checkFruit("Pear") повертає false
Виклик checkFruit("apple") повертає true
Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
У функції використовувався метод includes
*/
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruit === undefined ? Math.random() >= 0.5 : fruits.includes(fruit); // Change this line

// }
// console.log(checkFruit("Pear"));
// console.log(checkFruit("plum"));
// console.log(checkFruit());
	
/**
  |============================
  |Блок 2 Завдання  25/32
  |============================
Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

Оголошена функція getCommonElements(array1, array2)
Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
В циклі for використовувалися методи includes і push
*/
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const mass = [];
//   const massRand1 = [];
//   const massRand2 = [];
//   if (array1 !== undefined) {
//     for (const item of array1) {
//       if (array2.includes(item)) {
//         mass.push(item);
//       }
//     }
//     return mass;
//   } else {
//     for (let s = 0; s < 10; s += 1) {
//       massRand1.push(parseInt(Math.random() * 10));
//     }
//     for (let d = 0; d < 10; d += 1) {
//       massRand2.push(parseInt(Math.random() * 10));
//     }
//     for (const item2 of massRand1) {
//       if (massRand2.includes(item2)) {
//         mass.push(item2);
//       }
//     }
//     return mass;
//   }
 // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements());
/**
  |============================
  |Блок 2 Завдання  26/32
  |============================
Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

for (const variable of iterable) {
  // тіло цикла
}
variable - змінна, яка буде зберігати значення елемента на кожній ітерації
iterable - колекція, яка містить ітерабельні елементи, наприклад масив
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}
---------------------------------------------------------------
Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

Оголошена функція calculateTotalPrice(order)
Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
Виклик функції calculateTotalPrice([]) повертає 0
Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму
------------------------------------------------------------------
*/
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i of order) {
//     total += (i);
//   }

//   // Change code above this line
//   return total;
// }
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
/**
  |============================
  |Блок 2 Завдання  27/32
  |============================
Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

Оголошена функція filterArray(numbers, value)
Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
Функція filterArray() використовує цикл for..of
*/
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i of numbers) {
//     const number = (i);

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
/**
  |============================
  |Блок 2 Завдання  28/32
  |============================
Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

5 % 1 = 0;
// 5, поділене на 1, дорівнює 5, а остача - 0

5 % 2 = 1;
//  5, поділене на 2, дорівнює 2, а остача - 1

5 % 3 = 2;
//  5, поділене на 3, дорівнює 1, а остача - 2

5 % 4 = 1;
//  5, поділене на 4, дорівнює 1, а остача - 1

5 % 5 = 0;
//  5, поділене на 5, дорівнює 1, а остача - 0
-----------------------------------------------------
Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

Оголошена змінна a
Значення змінної a - це число 0
Оголошена змінна b
Значення змінної b - це число 1
Оголошена змінна c
Значення змінної c - це число 3
Оголошена змінна d
Значення змінної d - це число 5
Оголошена змінна e
Значення змінної e - це число 2
-----------------------------------------------------
*/
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
/**
  |============================
  |Блок 2 Завдання  29/32
  |============================
Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

Оголошена функція getEvenNumbers(start, end)
Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
Виклик функції getEvenNumbers(8, 8) повертає [8]
Виклик функції getEvenNumbers(7, 7) повертає []
Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив
*/
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const mass = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
// mass.push(i)
//     } continue;
//   }
// return mass;


//     // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
/**
  |============================
  |Блок 2 Завдання  30/32
  |============================
Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, який повністю припиняє виконання циклу і передає управління на рядок за його тілом.

У прикладі шукаємо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}

console.log("Лог після циклу");
-----------------------------------------------------
Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

Оголошена змінна start зі значенням 6
Оголошена змінна end зі значенням 27
Оголошена змінна number без ініціалізації
Підсумкове значення змінної number дорівнює 10
В циклі for використовується break для виходу до завершення усіх ітерацій циклу
-----------------------------------------
*/
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
/**
  |============================
  |Блок 2 Завдання  31/32
  |============================
Якщо цикл знаходиться в тілі функції, то оператор break не припиняє виконання функції, а тільки перерве цикл. Для того щоб переривати виконання відразу циклу і функції, є оператор return.

У прикладі шукаємо число 3. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
      return i;
    }
  }

  // Цей console.log не виконається
  console.log("Лог після циклу в тілі функції");
}

const result = fn();
console.log("Лог після виходу з функції");
console.log(`Результат виконання функції ${result}`);
-----------------------------------------------------
Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

повертала перше число від start до end, яке ділиться на divisor без остачі
не використала оператор break
не використала змінну number
Оголошена функція findNumber(start, end, divisor)
Виклик findNumber(2, 6, 5) повертає 5
Виклик findNumber(8, 17, 3) повертає 9
Виклик findNumber(6, 9, 4) повертає 8
Виклик findNumber(16, 35, 7) повертає 21
Виклик findNumber() з випадковим набором чисел повертає правильний результат
В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу
-----------------------------------------
*/
// function findNumber(start, end, divisor) {
//   // Change code below this line
//    for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

  
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
/**
  |============================
  |Блок 2 Завдання  32/32
  |============================
Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

Оголошена функція includes(array, value)
Виклик includes([1, 2, 3, 4, 5], 3) повертає true
Виклик includes([1, 2, 3, 4, 5], 17) повертає false
Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
У функції includes використовується for, return, але не метод масиву includes
*/
// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//       break;
//     }
//   } return false;

//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }
// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// // console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); 
// // console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// // console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// // console.log(calculateAverage(14, 8, 2)); // 8
// // console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2
// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього 
// відсутнього значення, виводе аргумент "Привіт , гість"
// // console.log(greet("Василь"));//Привіт Василь
// // console.log(greet());//Привіт гість
// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }
