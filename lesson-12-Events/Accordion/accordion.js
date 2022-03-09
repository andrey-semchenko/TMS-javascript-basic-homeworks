// Task 28
/* 
Реализуйте аккордеон. Пример:  https://codepen.io/abergin/pen/ihlDf 
*/
const accordion = document.querySelector('#accordion');

accordion.addEventListener('click', () => {
    if (event.target.closest('.wrapper_item')) {
        event.target.nextElementSibling.classList.toggle('open')
   }
})

