// Task 1 
/*
Создайте базовую разметку.
 Создайте список ul
 Внутри ul создайте 5 li
 Нужно получить:
- всех детей ul,
- первый li,
- третий li
- соседний li
*/

console.log (document.body.firstElementChild);
console.log (document.body.firstElementChild.firstElementChild);
console.log ( document.body.firstElementChild.children[2]);
console.log (document.body.firstElementChild.children[2].nextElementSibling);

// Task 2 
/*
Создайте базовую разметку
 Она должна содержать <ul> и <li>
 В первые два <li> добавьте тег <p>
 В остальные два тег <span>
 С помощью js пройдитесь по всем <li>
 Получите тег который содержит
текущий <li> и если он является <p>
добавьте содержимое этому тегу: Это
параграф
 То же самое нужно сделать с тегом
<span>, только содержимое будет:
Это спан
*/

const liTask2 = document.querySelector('#task2').children;

for (i of liTask2){
    if(i.firstElementChild.tagName == 'P') {
        i.firstElementChild.innerText = 'Это параграф'
    }
    else if (i.firstElementChild.tagName == 'SPAN') {
        i.firstElementChild.innerText = 'Это SPAN'
    }
};

// Task 3
/*
Создать разметку с помощью JS 
*/
const sectionDiv = document.createElement('section');
document.body.children[3].after(sectionDiv);

//h1
const addH1 = document.createElement('h1');
sectionDiv.appendChild(addH1).innerText = 'Caption';

//ul
const addUl = document.createElement('ul');
// const addLi = document.createElement('li');
// const addA = document.createElement('a');

sectionDiv.appendChild(addUl);

//googleLi
const googleLi = document.createElement('li');
const googleLink = document.createElement('a');
googleLink.setAttribute('href', 'https://google.com');
googleLi.appendChild(googleLink);
addUl.appendChild(googleLi);

//appleLi
const appleLi =  document.createElement('li');
const appleLink = document.createElement('a');
appleLink.setAttribute('href', 'https://apple.com');
appleLi.appendChild(appleLink);
addUl.appendChild(appleLi);

//input
const addInput = document.createElement('input');
sectionDiv.appendChild(addInput).setAttribute('type', 'submit');
sectionDiv.after(document.createElement('hr'))


//Task 4 
/*
 Создать класс в CSS и использовать
его: <div class="...">

 Писать стили непосредственно в
атрибуте style: <div style="...">.
*/
// const hrTag = document.createElement('hr');
// document.body.children[4].after(hrTag);

const divTask4 = document.createElement('div');
divTask4.className = 'task4';
document.body.children[5].after(divTask4);
setInterval ( () => divTask4.style.backgroundColor = 'red', 3000);
divTask4.style.width = '100px';

