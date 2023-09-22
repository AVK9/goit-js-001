/*Блок 6 
  |============================
*/
// const nameDoc = document.querySelector('.zagolov');
// nameDoc.textContent = '!!!Hello Hello Hello!!!';
// console.dir(nameDoc.textContent);
// nameDoc.classList.add('nameDocChangeColor');
// console.dir(nameDoc);
// nameDoc.classList.remove('nameDocChangeColor');
// console.dir(nameDoc);
// nameDoc.classList.toggle('nameDocChangeColor');
// console.dir(nameDoc);
// nameDoc.style.color = 'green';
// nameDoc.hidden = true;
// nameDoc.hidden= false;
// console.dir(nameDoc.getAttribute('id'));
// очистить container
// container.innerHTML = '';
//================================
/*
Для навігації по цій ієрархії елементи мають наступні властивості.

elem.parentNode - вибере батьківський elem.
elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
---------------------------------
Властивості та атрибути
value - поточний текстовий контент елементів форм.
checked - зберігає стан чекбокса або радіокнопки.
name - зберігає значення, вказане в HTML-атрибуті name.
src - шлях до зображення тегу <img>.
Властивість elem.textContent повертає текстовий контент

Властивість classList
elem.classList.contains(cls) - повертає true або false
elem.classList.add(cls) - додає клас cls 
elem.classList.remove(cls) - видаляє клас cls
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий

Властивість style
button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

Атрибути
----------------
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.

data-атрибути
----------------
Для отримання значення data-атрибута використовується властивість dataset, після якого стоїть ім'я атрибута. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.

<button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"
const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

----------------------------------
*/



/*lesson2
*/////////////////////////////////

const button = document.querySelector('.js-click');
const container = document.querySelector('.js-container');
button.addEventListener('click', onClick);
let step = 0;
function onClick(evt) {
    step += 5;
    container.style.marginLeft = `${step}px`
    // console.log(evt.currentTarget);
}
////////
// Cкриття текста
////////
const title = document.querySelector('.js-title');
const title1 = document.querySelector('.js-title1');
const title2 = document.querySelector('.js-title2');
title.addEventListener('click', onClick2);
title1.addEventListener('click', onClick2);
title2.addEventListener('click', onClick2);

const maxLength = 30;
const totalLength = maxLength + 3;

function onClick2(evt) {
    const title = evt.currentTarget;
  const str = title.textContent.slice(0, maxLength);
    if (title.textContent.length > totalLength) {
       
        const remainder = title.textContent.slice(maxLength);
        title.setAttribute('data-title', remainder);
        title.textContent = str + '...';
    } else {
        const remainder = title.dataset.title;
        if (remainder) {title.textContent = str + remainder; }
        
        console.log(remainder);
    }
        
    
}

/////
// Форма Инпут
////


const formEl = document.querySelector('.js-form');
formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();

    const { userName, userEmale, userNumber } = evt.currentTarget;
    const data = {
        name: userName.value,
        email: userEmale.value,
        number: userNumber.value,
    };
    console.log(data);
    }
/////
// Подія на клавиатурі
////
const container2 = document.querySelector('.js-container2');
document.addEventListener('keydown', onKey);
function onKey(evt) {
    // if (evt.code === 'Escape') {
    //     container2.classList.toggle('tog')
    // }
    if (evt.ctrlKey && (evt.code === 'KeyC')) {
        evt.preventDefault()
        alert('Копіюєш текст?')
        return;
    }
}

/////
// Задача пошука у формі
////
const cars[{ }, { }, { }]; //масив данніх

const list = document.querySelector('.js-list'); // наш бокс
const form = document.querySelector('.js-search-form');
form.addEventListener('submit', onSearch);

function createMarkup(arr) {
    return arr
        .map(
            (id, car, type, prise, img) =>
                `<li> ${car}'...'${type}
                </li>`
        ).join('');
}
list.insertAdjacentHTML('beforeend', createMarkup(cars));

function onSearch(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { nameCar, select } = form.elements;
    const selectValue = select.value;
    const searchCars = cars.filter(item => item[selectValue].toLowerCase() === nameCar.value.trim().toLowerCase());
    list.innerHTML = createMarkup(searchCars);
}