// Task 1 

//Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.

let abc = ['a', 'b', 'c'];
for (item of abc) {
    console.log(item)
};

// Task 2

/*
Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого
элемента число 1, вместо второго - 2, вместо третьего - 3.
*/
console.log(abc);

abc [0] = 1;
abc [1] = 2;
abc [2] = 3;

console.log (abc);

// Task 3 

/*
- let arr = [1, 2, 3];
- Добавьте ему в конец элементы 4 и 5.
- Удалите первый и второй элемент массива
*/

let arr = [1, 2, 3];
arr.push (4,5);
console.log (arr);

arr.splice(0,2);
console.log (arr);

// Task 4 

/*
- Создать массив объектов для юзеров.им.
[
{name: ‘John’, age: 18},
{name: ‘Andrew’, age: 12},
{name: ‘Tom’, age: 25},
{...}
]

Написать скрипт, который будет на
выходе отдавать два массива. Первый с
совершеннолетними пользователями,
второй с несовершеннолетними.
*/

let users = [
    {name: 'John', age: 18},
    {name: 'Nord', age: 25},
    {name: 'Pite', age: 8},
    {name: 'Olga', age: 13},
    {name: 'Katey', age: 42},
    {name: 'Elena', age: 16},
];

let usersMore18 = users.filter(function(item){
    return item.age >= 18
});
let usersLess18 = users.filter(item => item.age <18);

console.log(users);
console.log (usersMore18);
console.log (usersLess18);

/// Task 5
/*
-Суммирование чисел в массиве
 Прим. есть массив чисел
 var numbers = [10, 25, 100];
 Hа выходе должны получить переменную, в которой будет
содержаться сумма этих чисел (135)
 Расширить функционал, так, чтобы скрипт игнорировал другие
типы данных.
*/

let numbers = [2, 58, 65, 88, true,`str`, 100,50];
let sum =0;

for (item of numbers){
    if (typeof item != 'number') continue
    sum += item
};

console.log(sum);



