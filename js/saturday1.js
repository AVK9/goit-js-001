// ЗАДАЧА1.ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Введіть свої данні");
// const mail = prompt("Введіть свою пошту");
// const tel = prompt("Введіть свій телефон");

// console.log(`КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${mail} ПОЧТУ І ${tel} ТЕЛЕФОН`);

// ЗАДАЧА 2
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

//const priceOne = Number(prompt("Введіть ціну телевізора"));
//const priceTwo = +prompt("Введіть ціну холодильника");
//const priceThree = +prompt("Введіть ціну ноутбука");

//console.log(priceOne + priceTwo + priceThree);


////ЗАДАЧА 3
////ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
////"СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
////"НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt("How monthes in the year?"));
// if (month === 12) {
//     console.log("correct");
// } else {
//   console.log("incorrect")
// }
 
// ЗАДАЧА 4
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

//const number = Number(prompt("Парне?"));
//1 V
// if (number % 2 === 0) {
//     console.log(true);
    
// } else {
//     console.log(false);
//}
//2 V
// const newNumber = number % 2 === 0 ? true : false;
// console.log(newNumber)

// ! ЗАДАЧА 6
//НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ
// let userBirthdayMonth = Number(prompt('Enter your Birthday Month:'));

// function birthdayMonth() {
//     // Зима
// if (userBirthdayMonth === 1 || userBirthdayMonth === 2 || userBirthdayMonth === 12) {
//     console.log('Ви народилися взимку');
// }
// // Весна
// else if (userBirthdayMonth >=  3 && userBirthdayMonth <=  5) {
//     console.log('Ви народилися на весні');
// }
// // Літо
// else if (userBirthdayMonth >=  6 && userBirthdayMonth <=  8) {
//     console.log('Ви народилися влітку');
// }
// // Осінь
// else if (userBirthdayMonth >=  9 && userBirthdayMonth <=  11) {
//     console.log('Ви народилися восени');
// }
// // Некоректне значення
// else {
//     console.log('Ви ввели некоректне значення. Визначити пору року вашого народження неможливо!');
//     const newChack = confirm('Ви ввели некоректне значення. Визначити пору року вашого народження неможливо! Будь ласка введіть коректно місяць вашого народження');

//     do
//     { userBirthdayMonth = Number(prompt('Enter your Birthday Month:')); }
//     while (newChack === false)

//     if (newChack === true) {
//         userBirthdayMonth = Number(prompt('Enter your Birthday Month:'));
//     }
//     else {
//         confirm('Ви ввели некоректне значення. Визначити пору року вашого народження неможливо! Будь ласка введіть коректно місяць вашого народження');
//         userBirthdayMonth = Number(prompt('Enter your Birthday Month:'));
//     }
// }
// }

// birthdayMonth();

// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles.splice(1, 1, "Класика");
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.splice(0, 0, "Реп", "Регги");
// console.log(styles);

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false
// let word = str.split("").reverse().join("");
// console.log(str === word);
// let anotherWord = newString.split("").reverse().join("");
// console.log(newString === anotherWord);

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
//  const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));
///// !!!
// function findSmallestNumber(numbers) {
//     // console.log(numbers);
//         let numberMin;
//     for (let i = 0; i < numbers.length; i++) {
//         // console.log(numbers[i]);
//         if (numberMin < numbers[i]) {
//             continue;
//         } else {
//             numberMin = numbers[i];
//         };
//             } ;
//             return numberMin;
//     };

// console.log(findSmallestNumber([0, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([-10, 4, 83, 7, -8, 12]));


// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими


// function calculateAverage() {
//     let sumMas = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sumMas += arguments[i];
//     };
//     const otvet = sumMas / arguments.length;
//     return otvet;
// }
// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"

// function greet(name) {
//     return (!name) ? 'Привіт гість' : `Привіт ${name}`
//  };
// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// // function checkNumbers(a, b) {
// //   if (a > b) {
// //     return `число ${a} більше ${b}`;
// //   }

// //   return `число ${b} більше ${a}`;
// // }
//////////////////////////////
// function expression
//////////////////////////////
// const checkNumbers = function (a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }
// console.log(checkNumbers(3, 4));
//////////////////////////////
// стрілочну функцію
//////////////////////////////
// const checkNumbers = ((a, b) => {
//     if (a > b) {
//         return `число ${a} більше ${b}`;
//     }

//     return `число ${b} більше ${a}`;
// });
// console.log(checkNumbers(9, 4));

////////////////////////////////////////////
////////
////////////////////////////////////////////

// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const oKey = Object.keys(user)
// for (const key of oKey) {
//     console.log(`${key}: ${[key]}`);
// }
 

// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ

// const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
// };
 
// function Sallary(totSalaries) {
//     let total =0;
//     for (const man in totSalaries) {
//         total += salaries[man];
//     }
    
//     return `Total salaries ${total} `;
// }
// console.log(Sallary(salaries));

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

//      read() {
//          this.a = prompt('Enter value A');
//          this.b = prompt('Enter value B');
//   },

//      sum() {
//          return Number(this.a) + Number(this.b);
//   },

//      mult() {
//          return Number(this.a) * Number(this.b);
//   },
// };


// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());

// ЗАДАЧА 4
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// 3) відсортувати по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;

// const scientists = [
//     {
//       name: "Albert",
//       surname: "Einstein",
//       born: 1879,
//       dead: 1955,
//       id: 1,
//     },
//     {
//       name: "Isaac",
//       surname: "Newton",
//       born: 1643,
//       dead: 1727,
//       id: 2,
//     },
//     {
//       name: "Galileo",
//       surname: "Galilei",
//       born: 1564,
//       dead: 1642,
//       id: 3,
//     },
//     {
//       name: "Marie",
//       surname: "Curie",
//       born: 1867,
//       dead: 1934,
//       id: 4,
//     },
//     {
//       name: "Johannes",
//       surname: "Kepler",
//       born: 1571,
//       dead: 1630,
//       id: 5,
//     },
//     {
//       name: "Nicolaus",
//       surname: "Copernicus",
//       born: 1473,
//       dead: 1543,
//       id: 6,
//     },
//     {
//       name: "Max",
//       surname: "Planck",
//       born: 1858,
//       dead: 1947,
//       id: 7,
//     },
//     {
//       name: "Katherine",
//       surname: "Blodgett",
//       born: 1898,
//       dead: 1979,
//       id: 8,
//     },
//     {
//       name: "Ada",
//       surname: "Lovelace",
//       born: 1815,
//       dead: 1852,
//       id: 9,
//     },
//     {
//       name: "Lise",
//       surname: "Meitner",
//       born: 1878,
//       dead: 1968,
//       id: 11,
//     },
//     {
//       name: "Sarah E.",
//       surname: "Goode",
//       born: 1855,
//       dead: 1905,
//       id: 10,
//     },
//     {
//       name: "Hanna",
//       surname: "Hammarström",
//       born: 1829,
//       dead: 1909,
//       id: 12,
//     },
// ];
// const scientist = scientists.filter(elem => elem.born >= 1800 && elem.born < 1900);
// console.log(scientist);
// const age = scientists.reduce((acc, elem) => acc + (elem.dead - elem.born), 0);
// console.log (age / scientists.length);
// const sortName = [...scientists].sort((a, b) => a.name.localeCompare(b.name)).map((el) => `${el.name}`);
// console.log(sortName);
// const sortAge = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.log(sortAge);
// const whoBearn = [...scientists].filter(({ born }) => born >= 1400 && born <=1800);
// console.log(whoBearn);
// const findName = [...scientists].find(({ name, surname }) => name === 'Albert' && surname === 'Einstein').born;
// console.log(findName);

/*
ЗАДАЧА 1
1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
const Person = {
  firstName,
  lastName,
  age,
  gender,
  interest,
  bio() {
    // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
  },
  greeting() {
    // Привіт, я {імя}
  },
};
*/

// function Person(firstName, lastName, age, gender, interest) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;
// };
//     this.bio = function () {
//         console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`);
//     }

//     this.greeting() {
//         console.log(`Привіт, я ${this.firstName}`);
//     };

//     const newPerson = new Person('Mango', 'Cooper', 19, 'female', 'JS');
//     console.log(newPerson);
//     newPerson.bio();
//      newPerson.greeting();
/// copy
// function Person(firstName, lastName, age, gender, interest) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;

//     // this.bio = function () {
//     //     console.log(
//     //         `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//     //     );
//     // };
//     // this.greeting = function () {
//     //     console.log(`Привіт, я ${this.firstName}`);
//     // };
// }
// Person.prototype.bio = function () {
//     console.log(
//         `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//     );
// };
// Person.prototype.greeting = function () {
//     console.log(`Привіт, я ${this.firstName}`);
// };
// const newPerson = new Person("Mango", "Cooper", 19, "female", "JS");

// console.log(newPerson);
// newPerson.bio();
// newPerson.greeting();
//////////////////////////////////////////////




// class Person {
//     constructor(firstName, lastName, age, gender, interest) {
//         this.firstName = firstName,
//             this.lastName = lastName,
//             this.age = age,
//             this.gender = gender,
//             this.interest = interest
//     }
// };

//     bio () {
//         console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`);
// };

//     this.greeting() {
//         console.log(`Привіт, я ${this.firstName}`);
//     };

// const newPerson = new Person(
//     {
//         firstName = 'Mango',
//         lastName = 'Cooper',
//         age = 19,
//         gender = 'female',
//         interest = 'JS'
//     }
// );
    
    
   
//     console.log(newPerson);
//     newPerson.bio();
// newPerson.greeting();
   /// copy
// class Person {
//     constructor({ firstName, lastName, age, gender, interest }) {
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age,
//         this.gender = gender,
//         this.interest = interest
//     }
    
//     bio() {
//         console.log(`Привіт я ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`);
//     }

//     greeting = function () {
//         console.log(`Привіт, я ${this.firstName}`);
//     }
// }

// const newPerson = new Person(
//     {
//         firstName: "Mango",
//         lastName: "Pango",
//         age: 25,
//         gender: "male",
//         interest: "HTML"
//     }
// );

// console.log(newPerson);
// newPerson.bio();
// newPerson.greeting();
////========================================================================
/*
Напишіть клас User для створення користувача з наступними властивостями:
username - імя, рядок
age - вік, число
numberOfPosts - кількість постів, число
Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
Добавте метод getInfo(), який повертає рядок:
User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.
*/
// class User {
//     constructor({ firstName, lastName, age, gender, interest }) {
//         this.firstName = firstName,
//         this.age = age,
//         this.gender = gender,
//         this.numbrerOfPosts = numbrerOfPosts
//     }
//     getInfo() {
//         console.log(`User ${ this.firstName } is ${ this.age } years old and has ${ this.numbrerOfPosts } posts.`);
//      };
// };
// const person = new User({
//     firstName: 'Mango',
//     age: 25,
//     gender: male,
//     numbrerOfPosts: 155,
// });
// console.log(person);
// person.getInfo();

// class NewUser extends User {
//     constructor({ firstName, age, numbrerOfPosts }) {
//         super({firstName, age, numbrerOfPosts})
//     }
// }
// const teacher = new NewUser({username: 'Ajax', age: 40, numbrerOfPosts: 78})
/*
ЗАДАЧА 3
Напиши клас Storage який створює об'єкти для керування складом товарів.
При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
Добавте методи класу:

getItems() - повертає масив товарів.
addItem(item) - отримує новий товар та додає його до поточних.
removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
items.addItem("Манго");
items.removeItem("Ківі")
*/


class Storage{
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItems(item) {
        this.items.push(items);
    };
    removeItem(item) {
        const index = this.items.indecOf(item);
        if (index === -1) {
            return;
        } else {
    this.items.splice(index, 1)
    }
    } 
}

/*
ЗАДАЧА 4
Напиши клас Client який створює об'єкт із властивостями login і email.
Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.
ЗАДАЧА 3
Напиши клас Storage який створює об'єкти для керування складом товарів.
При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
Добавте методи класу:

getItems() - повертає масив товарів.
addItem(item) - отримує новий товар та додає його до поточних.
removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
items.addItem("Манго");
items.removeItem("Ківі")

ЗАДАЧА 2
Напишіть клас User для створення користувача з наступними властивостями:
username - імя, рядок
age - вік, число
numberOfPosts - кількість постів, число
Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
Добавте метод getInfo(), який повертає рядок:
User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

ЗАДАЧА 1
1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
const Person = {
  firstName,
  lastName,
  age,
  gender,
  interest,
  bio() {
    // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
  },
  greeting() {
    // Привіт, я {імя}
  },
};
*/

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
  console.log(textInput);
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});