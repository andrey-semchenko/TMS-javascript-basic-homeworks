// Task 1 
/*
<input id="button1" type="submit">
<input id="button2" type="submit">
<input id="button3" type="submit">
- Сделайте так, чтобы по клику на первую кнопку на экран выводилось
число 1, по клику на вторую - число 2, а по клику на третью - число 3.
*/

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

button1.addEventListener('click', () => alert(1));
button2.addEventListener('click', () => alert(2));
button3.addEventListener('click', () => alert(3));

// Task 2
/*
<input id="button1" type="submit" value="button1">
<input id="button2" type="submit" value="button2">
- Даны следующие функции:
-  function func1() { console.log(1); }
    function func2() { console.log(2); }
- Сделайте так, чтобы по клику на первую кнопку выполнилась
функция func1, а по клику на вторую - функция func2.
*/

function func1 () { console.log(1) };
function func2 () { console.log(2) };

const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');

button4.addEventListener('click', func1);
button5.addEventListener('click', func2);

// Task 3
/*
Даны два абзаца, содержащие своим текстом какие-то числа, и
кнопка. По нажатию на кнопку выведите на экран сумму хранящихся
чисел.
*/

const numOne = document.querySelector('#numOne').innerText;
const numTwo = document.querySelector('#numTwo').innerText;
const buttonSum = document.querySelector('#buttonSum');

buttonSum.addEventListener ('click', () => alert( +numOne + +numTwo));

// Task 4
/*
Дана картинка в теге img и кнопка. Пусть в атрибуте width задана
некоторая ширина. Сделайте кнопку, по нажатию на которую ширина
картинки будет увеличиваться в 2 раза.
*/

const btn = document.querySelector('.button');
const image = document.querySelector('img');

btn.addEventListener('click', () => image.setAttribute('width' ,'700'));

// Task 5 
/*
Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-
нибудь текст.
*/

const buttonText = document.querySelector('#buttonText');
const putText = document.querySelector('#inputText');

buttonText.addEventListener ('click', () => putText.setAttribute('value', 'Text from Button'));

// Task 6
/*
Создайте кнопку. Создайте список ul> li *3 с текстом внутри.
- Изначально список должен быть
спрятан.
- По нажатию на кнопку нужно показать
список или снова спрятать
*/

const listButton = document.querySelector('#listButton');
const list =document.querySelector('#list');


listButton.addEventListener('click', () => {
    if (list.style.display == 'block') {
        list.style.display = 'none'
    }
    else list.style.display = 'block'
} );

