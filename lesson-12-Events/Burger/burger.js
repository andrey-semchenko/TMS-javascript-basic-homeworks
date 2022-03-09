const btn_menu = document.querySelector('#btn_menu');
const menu = document.querySelector ('.menu');

btn_menu.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle("btn_menu_active");
    menu.classList.toggle("menu_open");

})