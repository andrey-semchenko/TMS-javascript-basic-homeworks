// Task 1 
/*
Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз,
пока результат не станет меньше 10.
 Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
*/

function caclItem (item){
    let i = 0
    for ( ; item > 10; i++ ){
        item = item /2
    }
    console.log (`количество итераций = ${i}`)
}
caclItem(5234)

// Task 2
/*
- запрашивает у пользователя число от 1 до 10
- генерирует рандомное число от 1 до 10(именно целое число, чтобы без десятых, сотых и т.д.)
- выводит в алерт юзеру сообщение о том, что он угадал число, если числа совпали. и, соответственно - нет, если не угадали

требования к выполнению этой задачи:

- генерирование числа должно быть написать в функции - getRandomNumber
- сравнение числа введенного юзера и сгенерированное программой должно происходить в функции - areNumbersEqual
- функции getRandomNumber и areNumbersEqual должны быть описаны в отдельном от основной программы файле
- если юзер ввел некорректно число (> 10, или какую-нибудь строку) - сказать ему об этом и предложить сыграть еще раз
*/



let askNumber = prompt(`enter a number from 1 to 10`)

while (askNumber > 10 || isNaN(askNumber) ){
    askNumber = prompt(`You enter Not a number \n OR \n a Number More than 10`)
}
console.log(typeof askNumber)
areNumbersEqual(askNumber)
   



// Task 3 
/*
Напишите функцию, которая будет принимать строку, нужно вернуть новую строку, 
которая будет делать заглавным первый символ каждого слова. 
*/

function getAllFisrtLettersUpper (words) {
    words = words.split(` `)
    let firstLetter 
    let lastLetters
    let newWords = ``
    for (let i =0; i < words.length; i++){
        firstLetter = words[i].slice(0,1).toUpperCase()
        lastLetters = words[i].slice(1)
        newWords += firstLetter +lastLetters + ' '
    }
    // console.log (newWords)
    return newWords
}
console.log ( getAllFisrtLettersUpper(`hello, young javascript developer`)) 

// Task 4
/*
Написать функцию, которая принимает любое количество чисел и возввращает их сумму. 
*/

function sum (...args) {
    let number = 0
    for (let i =0; i < args.length; i++) {
        number += args[i]
    }
    console.log (number)
}

sum (5,10);

// Task 5 
/*
Написать функцию которая будет принимать число ( дефолтное значение 2021)
 и вычисляет сумму цифр из которых состоит число. Для 2021 это будет 5.
*/

function sumNumbers (number = 2021 ) {
    number = number.toString().split('')
    let i = 0
    for (let item = 0; item < number.length; item++){
        i = +number[item] +i
    }
    return i
}

console.log(sumNumbers());

// Task 6
/*
Написать функцию, которая преобразуем любую строку в строку написанную кебаб кейсом
(все буквы с маленькой и на месте пробелов - тире).
 Например ‘Hello World’ - ‘hello-world’;
*/
function creataSrtCamel (str) {
    str = str.toLowerCase().split(' ').join('-')
    return str
}
console.log(creataSrtCamel(`hi JS DEVELOPER`));

// Task 7 
/*
Написать функцию, которая из любой фразы сделает и вернёт её аббревиатуру. 
Например: ‘Республика беларусь’ -> ‘РБ’
‘Минск’ -> ‘М’
*/

function getShortName (name) {
    let result = ``
    name = name.split(" ")
 for (let i =0; i < name.length; i++ ){
    let item = name[i].slice(0,1).toUpperCase()
    result += item
 }
 console.log (result)
}

getShortName(`набор слов для проверки задачи`);
