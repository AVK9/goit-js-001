/**
  |============================
  | Завдання 8/36
  |============================
*/
// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

/**
  |============================
  | Завдання 9/36
  |============================
*/
// function add(a, b, c) {
//   // Change code below this line

//     return (a + b + c);

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

/**
  |============================
  | Завдання 10/36
  |============================
*/
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

/**
  |============================
  | Завдання 11/36
  |============================
*/
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

/**
  |============================
  | Завдання 12/36
  |============================
*/
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// let message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));
/**
  |============================
  | Завдання 13/36
  |============================
*/
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >=18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20));
/**
  |============================
  | Завдання 14/36
  |============================
*/
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// Оголошена функція isValidPassword(password)
// У виразі перевірки паролів використаний оператор ===
// Виклик isValidPassword("mangodab3st") повертає false
// Виклик isValidPassword("kiwirul3z") повертає false
// Виклик isValidPassword("jqueryismyjam") повертає true
/**
  |============================
  | Завдання 15/36
  |============================
*/
// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".
// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

/**
  |============================
  | Завдання 16/36
  |============================
Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

available - загальна кількість товарів на складі
ordered - одиниць товару в замовленні
Використовуючи розгалуження, доповни код функції таким чином, що:

Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
В іншому випадку записується рядок "Order is processed, our manager will contact you.".
Оголошена функція checkStorage(available, ordered).
Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you."
Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you."
Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"
  */
//  function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//      if (ordered > available) {
//          message = "Not enough goods in stock!"
//      } else {
//          message = "Order is processed, our manager will contact you.";
//       }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

/**
  |============================
  | Завдання 17/36
  |============================
Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

Значення змінної a дорівнює 7
Використаний оператор +=
Значення змінної b дорівнює 6
Використаний оператор -=
Значення змінної c дорівнює 45
Використаний оператор *=
Значення змінної d дорівнює 2
Використаний оператор /=
  */
//  let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
/**
  |============================
  | Завдання 18/36
  |============================
Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

pricePerDroid - ціна одного дроїда
orderedQuantity - кіл-сть замовлених дроїдів
customerCredits - сума коштів на рахунку клієнта
Доповни її наступним функціоналом:

Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
Додай перевірку, чи зможе клієнт оплатити замовлення:
якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".
Оголошена функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
Виклик makeTransaction(3000, 5, 23000) повертає "You ordered 5 droids, you have 8000 credits left"
Виклик makeTransaction(1000, 3, 15000) повертає "You ordered 3 droids, you have 12000 credits left"
Виклик makeTransaction(5000, 10, 8000) повертає "Insufficient funds!"
Виклик makeTransaction(2000, 8, 10000) повертає "Insufficient funds!"
Виклик makeTransaction(500, 10, 5000) повертає "You ordered 10 droids, you have 0 credits left"
  */
//  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//      let totalPrice = pricePerDroid * orderedQuantity;
//      if (totalPrice <= customerCredits) {
//          message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//      } else {
//          message = "Insufficient funds!";
//      }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));
/**
  |============================
  | Завдання 19/36
  |============================
Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".
Оголошена функція checkPassword(password)
Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
Виклик checkPassword(null) повертає "Canceled by user!"
Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
Виклик checkPassword("jqueryismyjam") повертає "Welcome!"
  */
//  function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
/**
  |============================
  | Завдання 20/36
  |============================
Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

available - доступна кількість товарів на складі
ordered - одиниць товару в замовленні
Використовуючи розгалуження, доповни код функції таким чином, що:

Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".
Оголошена функція checkStorage(available, ordered)
Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
Виклик checkStorage(70, 0)повертає "There are no products in the order!"
Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
Виклик checkStorage(150, 0) повертає "There are no products in the order!"
  */
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (ordered === 0) {
//         message = "There are no products in the order!";
//     } else {
//         if (ordered > available) {
//             message = "Your order is too large, there are not enough items in stock!";
//         } else {
//               message = "The order is accepted, our manager will contact you";
//         }
//      }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));

/**
  |============================
  | Завдання 21/36
  |============================
Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

number - число, входження якого перевіряється
start - початок числового проміжку
end - кінець числового проміжку
Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

Оголошена функція isNumberInRange(start, end, number)
У виразі перевірки використаний оператор &&
Виклик isNumberInRange(10, 30, 17) повертає true
Виклик isNumberInRange(10, 30, 5) повертає false
Виклик isNumberInRange(20, 50, 24) повертає true
Виклик isNumberInRange(20, 50, 76) повертає false
  */
//  function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 5));
/**
  |============================
  | Завдання 22/36
  |============================
Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

Оголошена функція checkIfCanAccessContent(subType)
У виразі перевірки використаний оператор ||
Виклик checkIfCanAccessContent("pro") повертає true
Виклик checkIfCanAccessContent("starter") повертає false
Виклик checkIfCanAccessContent("vip") повертає true
Виклик checkIfCanAccessContent("free") повертає false
  */
//  function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));
/**
  |============================
  | Завдання 23/36
  |============================
Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

number - число, невходження якого перевіряється
start - початок числового проміжку
end - кінець числового проміжку
Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

Оголошена функція isNumberNotInRange(start, end, number)
У виразі використаний оператор !
Виклик isNumberNotInRange(10, 30, 17) повертає false
Виклик isNumberNotInRange(10, 30, 5) повертає true
Виклик isNumberNotInRange(20, 50, 24) повертає false
Виклик isNumberNotInRange(20, 50, 76) повертає true
  */
//  function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

/**
  |============================
  | Завдання 24/36
  |============================
Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

Використовуючи розгалуження і логічні оператори, доповни код функції.

Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

Оголошена функція getDiscount(totalSpent)
Виклик getDiscount(137000) повертає 0.1
Виклик getDiscount(46900) повертає 0.05
Виклик getDiscount(8250) повертає 0.02
Виклик getDiscount(1300) повертає 0
Виклик getDiscount(5000) повертає 0.02
Виклик getDiscount(20000) повертає 0.05
Виклик getDiscount(50000) повертає 0.1
  */
//  function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//      if (totalSpent >= 50000) {
//          discount = GOLD_DISCOUNT;
//      } else {
//          if (totalSpent >= 20000) {
//              discount = SILVER_DISCOUNT;
//          } else {
//              if (totalSpent >= 5000) {
//                  discount = BRONZE_DISCOUNT;
//              } else {
//                  discount = BASE_DISCOUNT;
//              }
//          }
//      }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));
/**
  |============================
  | Завдання 25/36
  |============================
Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

Оголошена функція checkStorage(available, ordered).
Використаний тернарний оператор.
Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"
  */
//  function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

// //   if (ordered > available) {
// //     message = "Not enough goods in stock!";
// //   } else {
// //     message = "The order is accepted, our manager will contact you";
// //   }
//      message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
/**
  |============================
  | Завдання 26/36
  |============================
Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

Використовуючи тернарний оператор, доповни функцію таким чином, що:

Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
В іншому випадку, присвой message рядок "Access denied, wrong password!".
Оголошена функція checkPassword(password)
Використаний тернарний оператор
Виклик checkPassword("jqueryismyjam") повертає "Access is allowed"
Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"
  */
//  function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//      message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));
/**
  |============================
  | Завдання 27/36
  |============================
Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.
Якщо значення параметра type - це рядок:
"starter" - ціна передплати 0 кредитів.
"professional" - ціна передплати 20 кредитів.
"organization" - ціна передплати 50 кредитів.
Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.
if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

Оголошена функція getSubscriptionPrice(type)
Виклик getSubscriptionPrice("professional") повертає число 20
Виклик getSubscriptionPrice("organization") повертає число 50
Виклик getSubscriptionPrice("starter") повертає число 0
  */
//  function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
/**
  |============================
  | Завдання 28/36
  |============================
Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

Якщо значення параметра password:

дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

Оголошена функція checkPassword(password)
Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
Виклик checkPassword(null) повертає "Canceled by user!"
Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
Виклик checkPassword("jqueryismyjam") повертає "Welcome!"
//   */
//  function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// //   if (password === null) {
// //     message = "Canceled by user!";
// //   } else if (password === ADMIN_PASSWORD) {
// //     message = "Welcome!";
// //   } else {
// //     message = "Access denied, wrong password!";
// //      }
     
//      switch (password) {
//           case null:
//       message = "Canceled by user!";
//              break;
//          case ADMIN_PASSWORD:
//       message = "Welcome!";
//              break;
//          default:
//       message = "Access denied, wrong password!";
         

//      }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
/**
  |============================
  | Завдання 29/36
  |============================
Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.

Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

Список країн і вартість доставки:

China - 100 кредитів
Chile - 250 кредитів
Australia - 170 кредитів
Jamaica - 120 кредитів
Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

Оголошена функція getShippingCost(country)
В тілі функції використана інструкція switch
Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"
  */
//  function getShippingCost(country) {
//   let message;
//   // Change code below this line
//      switch (country) {
//          case "Australia":
//              message = "Shipping to Australia will cost 170 credits";
//              break;
//                   case "China":
//              message = "Shipping to China will cost 100 credits";
//              break;
//                   case "Chile":
//              message = "Shipping to Chile will cost 250 credits";
//              break;
//                   case "Jamaica":
//              message = "Shipping to Jamaica will cost 120 credits";
//              break;
//          default:
//                message = "Sorry, there is no delivery to your country";
//      }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));
/**
  |============================
  | Завдання 30/36
  |============================
Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

Оголошена функція getNameLength(name)
Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
Виклик функції getNameLength("Harambe") повертає "Name Harambe is 6 characters long"
Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"

const productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12

  */
//  function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));
/**
  |============================
  | Завдання 31/36
  |============================
Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

courseTopicLength - довжина рядка.
firstElement - перший символ рядка.
lastElement - останній символ рядка.
Оголошена змінна courseTopic
Значення змінної courseTopic - це рядок "JavaScript essentials"
Оголошена змінна courseTopicLength
Значення змінної courseTopicLength - це число 21
Оголошена змінна firstElement
Значення змінної firstElement - це рядок "J"
Оголошена змінна lastElement
Значення змінної lastElement - це рядок "s"
  */
//  const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
/**
  |============================
  | Завдання 32/36
  |============================
Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

string - оригінальний рядок
length - кількість символів з початку рядка для підрядка
Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

Оголошена функція getSubstring(string, length)
Виклик функції getSubstring("Hello world", 3) повертає "Hel"
Виклик функції getSubstring("Hello world", 6) повертає "Hello"
Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
Виклик функції getSubstring("Hello world", 0) повертає ""

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"
  */
//  function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
/**
  |============================
  | Завдання 33/36
  |============================
Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

Доповни код функції таким чином, що якщо довжина рядка:

не перевищує maxLength, функція повертає його в початковому вигляді.
більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.
Оголошена функція formatMessage(message, maxLength)
Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"
  */
//  function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//      if (message.length <= maxLength) {
//          result = message;
//      } else {
//          result = message.slice(0, maxLength) + '...';
//          console.log(message.length);
//      }
     
//   /// Change code above this line
//   return result;
// }
// // console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
/**
  |============================
  | Завдання 34/36
  |============================
Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

Оголошена функція normalizeInput(input)
Виклик функції normalizeInput("Hello world") повертає "hello world"
Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
Виклик функції normalizeInput("Big SALE") повертає "big sale"

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
  */
//  function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
/**
  |============================
  | Завдання 35/36
  |============================
Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
name - ім'я для перевірки входження в повне ім'я.
Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

Оголошена функція checkForName(fullname, name).
Виклик функції checkForName("Egor Kolbasov", "Egor") повертає true
Виклик функції checkForName("Egor Kolbasov", "egor") повертає false
Виклик функції checkForName("Egor Kolbasov", "egOr") повертає false
Виклик функції checkForName("Egor Kolbasov", "Zhenya") повертає false
Виклик функції checkForName("Vadim Nekrasov", "Vadim") повертає true
Виклик функції checkForName("Vadim Nekrasov", "vadim") повертає false
Виклик функції checkForName("Vadim Nekrasov", "Dima") повертає false
Метод рядків includes(substring) перевіряє, чи входить підрядок substring у рядок, повертає буль - true, якщо входить, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад літера "a" не дорівнює літері "А".

const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false
  */
//  function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
/**
  |============================
  | Завдання 36/36
  |============================
Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
Якщо в рядку відсутні заборонені слова, функція повертає буль false.

Оголошена функція checkForSpam(message).
Виклик функції checkForSpam("Latest technology news") повертає false
Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
Виклик функції checkForSpam("Get best sale offers now!") повертає true
Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true
  */
// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     message = message.toLowerCase();
//     //   console.log(message);
//     result = message.includes('spam') || message.includes('sale');
// // console.log(result);
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));
/**
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

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line
// }
