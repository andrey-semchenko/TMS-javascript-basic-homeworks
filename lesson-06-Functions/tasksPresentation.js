// TASKS FROM PRESENTATION //

// TASK 1

function hello () {
    console.log (`Привет , JavaScript!`)
}

hello();

/// TASK 2 

let helloArrow = () => console.log(`Привет ,JavaScript!`)

helloArrow();

//// TASK 3

function hello2  (name ='гость') {
    console.log(`Привет, ${name} !`)
}
hello2();

///// TASK 4  

function rgb (a=0, b=0, c=0){
    console.log (`rdg: ${a},${b},${c}`)
}
rgb(05,83,);

///// plus Task 4 arrow edition

let rgba = (a=0, b=0, c=0, d=0) =>console.log (`rdga: ${a},${b},${c},${d}`)

rgba(10,31,);

////// TASK 5

let a = +prompt('Введите 1-ое число');
let b = +prompt('Введите 2-ое число');

function min (a,b) {
    if (a > b){
        return b
    }
    else if (a < b){
        return a
    }
    else
    return `Ваши числа равны 0 ?`
}
let result = min (a,b);
console.log(result);

////// TASK 6 

function getSignNumber (e) {
    if (e > 0){
        return `+++`
    }
    return `---`
}
console.log (getSignNumber(2))

////// TASK 7

function  getSum (q,w,e) {
    return q + w + e
}
alert(getSum(2,5,20))