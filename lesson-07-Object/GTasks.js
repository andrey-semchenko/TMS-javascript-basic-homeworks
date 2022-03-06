// Task 1
/*

1. TASK:
Написать ф-цию, которая принимает объект и меняет местами ключи и значения
```javascript
function convertObject(obj) {}
convertObject({ a: "b", c: "d" }); // => { b: 'a', d: 'c' }

*/

let obj1 = {
    name: 'Andrey',
    age: 28,
    jsDev: false,
};
console.log ( obj1)

function changeObj (obj) {
    for (let key in obj){
        let newKey =  obj[key];
        let newValue = key;
        obj[newKey] = newValue;
        delete obj[key]
    }
}
changeObj(obj1);
console.log ( obj1);

/// Task 2 
/*

- Написать ф-цию, которая принимает объект, где в качестве значений - числа
- Ф-ция должна проверить, есть ли среди значений четные числа и вернуть true/false

```javascript
function isEvenValue(obj) {}

isEvenValue({ x: 1, y: 2 }); // => true
isEvenValue({ x: 1, y: 1 }); // => false

*/

function isEvenValue (obj) {
    for (let key in obj ) {
        if (obj[key] % 2 == 0 ){
            console.log (true)
        }
        else console.log (false)
        }
    }

isEvenValue ({ x: 1, y: 3,});

