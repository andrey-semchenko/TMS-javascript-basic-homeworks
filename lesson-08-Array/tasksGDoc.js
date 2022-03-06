// Task 1 
/*
TASK: 
Написать функцию, которая принимает параметрами два массива и сливает их в объект так,
что элементы первого массива становятся ключами, а второго - значениями.
*/

const firstArr = [`first`, `second`, `third`,];
const secondArr = [true, false, 101];
const obj = {};

function objSumArraies (arr1, arr2) {
    for (let i= 0; i < arr1.length; i++ ) {
        obj[arr1[i]] = arr2[i]
    }
    return obj
}
objSumArraies(firstArr,secondArr);
// console.log(obj)

// Task 2 
/*
Дан массив вида [1, 2, 3, 4, 5, 6, 7, 8, 9]. 
Сделайте функцию, которая будет разбивать его в двухмерный массив.
Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве.
Например, так

```javascript
func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)[([1, 2, 3], [4, 5, 6], [7, 8, 9])]; // Мы получим
```

*/

const arr = [1, 2, 3,4];

function getNewArr (arr,num) {
    for (let i of arr) {
       let res = arr.splice(0, num);
       arr.push(res)
    }
    return arr
};

getNewArr(arr,2);
// console.log (arr);

// Task 3 
/*
Фильтр юзеров
Создать массив объектов для юзеров.
Прим.

```javascript
[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
```
Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

*/

const users = [
    {name: 'Ivan', age: 18},
    {name: 'Peter', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Olya', age: 3},
];
const ageLess18 = [];
const ageMore18 = [];

function filterAge (arr) {
    arr.filter(item => {
        if (item.age < 18) {
            ageLess18.push(item)
        }
        else ageMore18.push(item)
    })
}
filterAge(users);
// console.log (ageLess18);
// console.log (ageMore18);

// Task 3 another solution 

const less18 = users.filter(item => item.age < 18 );
const more18 = users.filter(item => item.age >= 18);

// console.log (less18);
// console.log (more18);

// Task 4 
/*
- Создайте массив из 5 любых элементов.
  - Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
  - Склонированный массив вывести в консоль
*/

const randomArr = [true, `My name is..`, 151215184n, 666, 'fifth element'];

const cloneArr = randomArr.concat();

// console.log (cloneArr);
// console.log (randomArr);

// Task 5
/*
- написать ф-цию, которая принимает в качестве параметра массив чисел, фильтрует его и возвращает массив нечетных чисел [1, 2, 3] -> [1, 3]
- написать ф-цию, которая принимает в качестве параметра массив чисел и возвращает массив их квадратов // [1, 2, 3, 4] -> [1, 4, 9, 16]
- написать функцию, которая в качестве параметра принимает массив с разными типами данных. возвращает true, если в массиве есть строка,
возвращает false, если в массиве строк нет
*/

function evenNums (arr) {
    const evenArr = arr.filter ( item => item % 2 === 0)
    return evenArr
}

const nums = evenNums([1, 2, 3, 4, 5]);
// console.log (nums);

function sqNums (arr) {
    const sqArr = arr.map(i => i ** 2);
    return sqArr;
};

const square = sqNums ([1, 2, 3, 4, 5])
// console.log (square);

function strIn (arr) {
    const result = arr.some(item => typeof item == 'string');
    return result
}

const stingIn = strIn([true, , 666n]);
// console.log (stingIn)


// Task 6 
/*
- Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
- и возвращает массив значений лежащих в поле age
*/

const people = [
    {name: 'Jonh', age: 20},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 5},
    {name: 'Peter', age: 66},
];

const agePeople = people.map( item => item.age);

// console.log (people);
// console.log (agePeople);

// Task 7
/*
- Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
- и вторым параметром ключ, по которому надо собрать массив
```javascript
function getAges(array, key) {}

getAges(
  [
    { name: "Sergey", age: 33 },
    { name: "Daria", age: 33 },
  ],
  "name"
); // => ['Sergey', 'Daria']

getAges(
  [
    { name: "Sergey", age: 33 },
    { name: "Daria", age: 33 },
  ],
  "age"
); // => [33, 33]

*/

const arrayOfUsers = [
    {name:'Adam', age:25, country:'by',},
    {name:'Eva', age:25, country:'by',},
    {name:'Peter', age:66, country:'rus',},
    {name:'Andrey', age:27, country:'uk',},
    {name:'Susan', age:20, country:'usa',},
];

function getUserInfo (arr, key) {
    let result = arr.map( i => i[key])
    return result
};
// console.log(getUserInfo (arrayOfUsers, 'country'));

// Task 8 
/*
- Написать ф-цию, которая принимает массив объектов.
- Значения этих объектов - числа. Вернуть объект с суммами ключей
```javascript
function calculate(array) {}
calculate([
  { x: 1, z: 2, y: 3 },
  { x: 10, z: 21, y: 4 },
  { x: 2, z: 3, y: 4 },
  { a: 1, b: 2 },
]);
// => { x: 13, z: 26, y: 11, a: 1, b: 2 }
*/

const arrNumObj = [
    { x: 1, z: 2, y: 3 },
    { x: 10, z: 21, y: 4 },
    { x: 2, z: 3, y: 4 },
    { a: 1, b: 2 },
  ];

function calculate (arr) {
    let obj = {};
    arr.map (i => {
        for (let key in i) {
            if (key in obj) {
                obj[key] += i[key]
            }
            else {
                obj[key] = i[key]
            }
        }
    });
    return obj
}
// console.log (calculate(arrNumObj));

// Task 9 
/*
- Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
- Напишите код, который уберет эти дубликаты из созданного массива.
*/

const arrOfEl = [2,true, 2, false, {id:007}, false,666, [6n, 7n, 8n], 666];

function clearArray (arr) {
    let a = arr.filter ((item,i) => arr.indexOf(item) == i );
    return a
};
// console.log (clearArray(arrOfEl) )

// Task 10
/*
- Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
- Напишите код, который уберет эти дубликаты из созданного массива.
*/

function numDubleItemsArray (arr) {
    let a = arr.filter ((item,i) => arr.indexOf(item) !== i );
    return a.length
};

// console.log ( numDubleItemsArray (arrOfEl))

// Task 11 
/*
- Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
- Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
*/

const org = [1, 2, 3];

const cloneReverseArr = org.concat().reverse();

// console.log (cloneReverseArr);
// console.log(org);

// Task 12
/*
- Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
*/

const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const sumOfNums = arrOfNums.reduce( (acc, i) => {
    return acc += i
}, 0);

// console.log (sumOfNums);


// Task 13
/*
- Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
- Например:
  ```javascript
      [1,2,3] -> [1,4,9].
*/

const numArr = [1, 3, 5, 6, 12, 45, 06, 6994, 9, 99];
const sqNumArr = numArr.map ( i => i ** 2);
// console.log (numArr);
// console.log (sqNumArr);

// Task 14
/*
- Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
- Использовать reduce.
*/

const sexArr = [
    {name: 'Olya', sex: 'Female'},
    {name: 'Ann', sex: 'Female'},
    {name: 'Oleg', sex: 'Male'},
    {name: 'Peter', sex: 'Male'},
];

const sexMaleArr = sexArr.reduce( (acc, item) => {
    if (item.sex == 'Male') acc.push(item)
    return acc
},[]);

const sexFemaleArr = sexArr.reduce ( (acc, item) => {
    if (item.sex == 'Female') acc.push (item)
    return acc
}, []);

// console.log (sexMaleArr);
// console.log ( sexFemaleArr);

// Task 15
/*
- Написать функцию, которая принимает первым аргументом массив,
- а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
- (indexOf, findIndex не использовать)
*/
const trashArr = [2,true, 2, false, {id:007}, false,666];

function clearArr (arr,key) {
    for (let i in arr) {
        if (arr[i] == key)
            {return i}
     }
    return -1
}

// console.log (clearArr(trashArr, 666))

// Task 16
/*
- Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
- Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою сортировку.
*/

const unsortArr = [5, 2, -5, 3, 85, 101, 66, 666, 33];

const sortArr = unsortArr.sort( (a, b) => a - b);
// console.log (sortArr)

// Task 17 
/*
- Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
- одинаковые у них элементы или нет.
*/

const array1 = [1, true, 606, 8n, ];
const array2 = [2, 5, 606 ];

function comparisonArr (arr1,arr2) {
    let sum = arr1.concat(arr2);
    let result = sum.some ( (i,index) => index != sum.indexOf(i) )
    return result
}
// console.log ( comparisonArr(array1, array2))

// Task 18 

/*
- Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
- вернет массив элементами которого являются эти части.
- Пример функции:
  ```javascript
      splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
*/

const arr18 = [1, 2, 3, 4, 5, 6,7];

function splitArr (arr, key) {
    let result = [];
    while (arr.length) {
        result.push(arr.splice(0,key));
    }
    return result
} 

// console.log ( splitArr(arr18,2) )

// Task 19 
/*
Напишите функцию, которая очищает массив от нежелательных значений,
- таких как false, undefined, пустые строки, 0, null.
*/

const trashArray = [ 0, 101, 'str', '', null, false, undefined];

function clearArray19 (arr) {
    let result = arr.filter ( i => Boolean(i) == true)
    return result
};

// console.log ( clearArray19(trashArray))