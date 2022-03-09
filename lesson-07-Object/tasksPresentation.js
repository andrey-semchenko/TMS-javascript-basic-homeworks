///// TASK 1
/*
- Создать объект пользователя
интернет магазина,
 - объект должен содержать
следующие поля: имя, возраст, email,
номер телефона, в консоль вывести
ключ и значение объекта
*/

let userAccount = {
    name:'Pite',
    age: 25 ,
    email: 'example@mail.com',
    tel: '80(17)666-99-66' ,
}
for (let key in userAccount){
    console.log (`${key} - ${userAccount[key]}`)
}

//// TASK 2 
/*
Добавьте метод к объекту который будет выводить в консоль ваше имя
*/

userAccount.getName = function (name) {
    console.log (name)
}
userAccount.getName(`Man`);

// function foo (name){
//     console.log(name)
// }
// userAccount.getName =foo 
// console.log (userAccount)


//// TASK 3
/*
- Метод getName должен принимать имя, записывать его в this.name и
выводить в консоль новое имя

- Напишите метод, который будет позволять изменять номер телефона
объекта

- Также сделайте и для email
*/

userAccount.getName = function (name) {
    this.name = name
}
userAccount.getName(`Tom`);

userAccount.changeEmal = function (emal) {
    this.email=emal 
}
userAccount.changeTel = function (tel){
    this.tel = tel
}

userAccount.changeTel(95552178);
userAccount.changeEmal(`gg@mail.com`);

console.log (userAccount)

///// TASK 4
/*
- Создайте объект дерево у которого есть следующие свойства:
название,
высота,
количество листьев,
семейство.

- Необходимо вывести в консоль объект, а затем "укоротить" дерево, и
вывести в консоль.

- Подсказка: посмотреть операторы += -=
 */

let tree = {
    name: `Dub` ,
    height: `100` ,
    quantityLists: `5000`,
    family: `Fagacea`,
}
console.log (tree)

function getShort (height,lists) {
    this.height -=height,
    this.quantityLists -=lists
}

tree.getShort = getShort
tree.getShort(70,300)

console.log(tree)
