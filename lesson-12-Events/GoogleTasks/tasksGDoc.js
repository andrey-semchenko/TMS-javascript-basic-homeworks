// Task 1 
/*
Даны два абзаца и две кнопки. 
Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.
*/
// 
const textPOne = document.querySelector('#textPOne').innerText;
const textPTwo = document.querySelector("#textPTwo").innerText;

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', () => alert(textPOne));
btn2.addEventListener('click', () => alert(textPTwo));

// Task 2 
/*
Дан абзац и две кнопки. 
По нажатию на первую кнопку запишите в абзац слово 'привет',
а по нажатию на вторую кнопку - слово 'пока'.
*/

const textHello = document.querySelector('#textHello');
const textBy = document.querySelector('#textBy');
const btnHello = document.querySelector('#btnHello');
const btnBy = document.querySelector('#btnBy');

btnHello.addEventListener('click', () => textHello.innerText = 'привет');
btnBy.addEventListener('click',() => textBy.innerText = 'пока');

// Task 3
/*
Даны 3 абзаца с текстом. 
По нажатию на первый абзац запишите в его текст число 1,
по нажатию на второй абзац запишите в его текст число 2,
а по нажатию на третий - запишите в его текст число 3.
*/

const putOne = document.querySelector('#putOne');
const putTwo = document.querySelector('#putTwo');
const putThree = document.querySelector('#putThree');

putOne.addEventListener('click', () => putOne.innerText = 1);
putTwo.addEventListener('click', () => putTwo.innerText = 2);
putThree.addEventListener('click', () => putThree.innerText = 3);

// Task 4
/*
Дан абзац и кнопка. 
В абзаце записано какое-то число.
 По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.
*/
const textPow = document.querySelector('#textPow');
const btnPow = document.querySelector('#btnPow');

btnPow.addEventListener('click', () => {
    let sum = textPow.innerText**2
    textPow.innerText = sum
});

// Task 5
/*
Дан абзац с числом и кнопка. 
По нажатию на кнопку прибавьте к значению абзаца единицу 
и запишите полученное число обратно.
*/

const textPlus = document.querySelector('#textPlus');
const btnPlus = document.querySelector('#btnPlus');

btnPlus.addEventListener('click', () => {
    let sum = parseInt(textPlus.innerText) +1
    textPlus.innerText = sum
});


// Task 6 
/*
Дан абзац с текстом и кнопка. 
По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
*/

const textTask = document.querySelector('#textTask');
const btnTask = document.querySelector('#btnTask');

btnTask.addEventListener('click', () => textTask.innerText += " !");

// Task 7 
/*
Модифицируйте предыдущую задачу так,
 чтобы восклицательный знак записывался не в конец текста, а в начало.
*/
const textTaskSeven = document.querySelector('#textTaskSeven');
const btnTaskSeven = document.querySelector('#btnTaskSeven');

btnTaskSeven.addEventListener('click', () => textTaskSeven.innerText = '! ' + textTaskSeven.innerText);

// Task 8 
/*
Дан абзац с текстом и кнопка. 
По нажатию на кнопку прочитайте текст абзаца, 
оберните этот текст в теги <b> и запишите новый текст обратно в абзац.
*/

const textBold = document.querySelector('#textBold');
const btnBold = document.querySelector('#btnBold');

btnBold.addEventListener('click', () => {
    textBold.innerHTML = '<b>'+ textBold.innerHTML +'</b>'
    }
);

// Task 9 
/*
Дана картинка в теге img и кнопка. 
По нажатию на кнопку в атрибут width запишите значение 300.
*/

const pic = document.querySelector('#pic');
const picEnlarge = document.querySelector('#picEnlarge');

picEnlarge.addEventListener('click', () => pic.setAttribute('width', '300'));

// Task 10
/*
Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута,
затем отредактируйте текст в инпуте и еще раз нажмите на кнопку.
Убедитесь в том, что выведется новый текст инпута.
*/
const enterText = document.querySelector("#enterText");
const btnText = document.querySelector('#btnText');

btnText.addEventListener('click', () => alert(enterText.value));

// Task 11
/*
Даны 5 инпутов, абзац и кнопка. 
В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
*/

const numOne = document.querySelector('#numOne');
const numTwo = document.querySelector('#numTwo');
const numTree = document.querySelector('#numTree');
const numFour = document.querySelector('#numFour');
const numFive = document.querySelector('#numFive');
const numSum = document.querySelector('#numSum');

numSum.addEventListener('click',calcNum);

function calcNum () {
    let sumPlus = +numOne.value + +numTwo.value + +numTree.value + +numFour.value + +numFive.value
    let middle = sumPlus / 2
    console.log (middle)
}

// Task 12
/*
Дана ссылка. 
По нажатию на эту ссылку добавьте в конец ее текста содержимое,
ее атрибута href в круглых скобках.
Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
(Нужно использовать отвязку события)
*/

const link = document.querySelector('#link')
const btnLink  = document.querySelector(`#btnLink`);

btnLink.addEventListener('click', function addLink () {
    link.innerText += ` (${link.href})`
    btnLink.removeEventListener('click',addLink )
    }
)

// Task 13
/*
Дана кнопка, значением которой служит число 1. 
Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. 
После того, как значение кнопки достигнет 10 - отвяжите обработчик события,
 чтобы кнопка больше не реагировала на нажатие.
*/
const bntPlus = document.querySelector('#bntPlus');

function plusOne (){
    bntPlus.innerHTML = parseInt(bntPlus.innerHTML) + 1

    if (bntPlus.innerHTML == "10")
    bntPlus.removeEventListener('click',plusOne)
}

bntPlus.addEventListener('click', plusOne);

// Task 14 
/*
Даны абзацы. 
По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
*/

const textOne14 = document.querySelector('#textOne14');
const textTwo14 = document.querySelector('#textTwo14');

function add () {
    this.innerText +=  ' !'
    this.removeEventListener('click', add)
}

textOne14.addEventListener('click', add);
textTwo14.addEventListener('click', add);

// Task 15
/*
Дан инпут с каким-то начальным значением. 
Пусть пользователь меняет это значение. 
Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.
*/

const inp = document.querySelector('#inp');
const btnValue = document.querySelector('#btnValue');

btnValue.addEventListener('click', function () {
    inp.value = inp.getAttribute('value')
})

// Task 16
/*
Дана кнопка. 
Сделайте так, чтобы эта кнопка считала количество кликов по ней, 
записывая их в какой-нибудь пользовательский атрибут. 
Пусть по двойному клику на эту кнопку на экран выводится, 
сколько кликов по этой кнопке было сделано.
*/

const btnClick = document.querySelector('#btnClick');
let sumClick = 0;

btnClick.addEventListener('click',function (e) {
     if (e.detail === 1) {
        sumClick ++
    }
    else if (e.detail === 2) {
        alert('количество кликов по кнопке: ' + sumClick)
    }
});

// Task 17
/*
Даны абзацы.
Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца.
Используйте метод setAttribute.
*/ 

const allPTask = document.querySelectorAll('.task17')

function setClassData () {
    for (let i = 0; i < allPTask.length; i++){
        allPTask[i].setAttribute ('data-num',`порядковый номер: ${i +1}` )
    console.log( allPTask[i])
    }
}
// setClassData ();

// Task 18
/*
Дано несколько инпутов, абзац и кнопка.
 По нажатию на кнопку получите числа, 
cтоящие в этих инпутах и запишите их сумму в абзац.
*/

const sumInputs = document.querySelector('#sumInputs');
const sumBtn = document.querySelector('#sumBtn');
const inpTask18 = document.querySelectorAll('.inpTask18');

sumBtn.addEventListener('click',function () {
        let item = 0
        for (let i = 0; i < inpTask18.length; i++) {
            item += +inpTask18[i].value
        }
        sumInputs.innerText = item
    })
// Task 19
/*
Дан инпут.
В него вводится слово.
По нажатию на кнопку проверьте то,
что это слово читается с начала и с конца одинаково (например, мадам).
*/
const word = document.querySelector('#word');
const wordBtn = document.querySelector('#wordBtn');

wordBtn.addEventListener('click', function () {
    let resWord = word.value.split('').reverse().join('')
    if(word.value != resWord) {
        console.log('fail')
    }
    else console.log ('succses')
})

// Task 20
/*
В инпут вводится страна и нажимается Enter. 
По нажатию на Enter сделайте так, 
чтобы введенные страны записывались в абзац под инпутом через запятую.
Tо есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.
*/

const countryInp = document.querySelector('#countryInp');
let country = document.querySelector('#country');

countryInp.addEventListener('keyup',function (s) {
    if (s.keyCode === 13 ){
        country.innerText +=  " " + countryInp.value
     }
})

// Task 21
/*
На странице есть дивы.
В них есть текст.
Обойдите все дивы и обрежьте тот текст,
который в них стоит так, чтобы он стал длиной 10 символов.
И добавьте троеточие в конец обрезанного текста
*/

let divTask21 = document.querySelectorAll('.divTask21');
const shortBtn = document.querySelector('#shortBtn');

shortBtn.addEventListener('click',shortTextDiv )

function shortTextDiv() {
    for (let i = 0; i < divTask21.length; i++) {
        if (divTask21[i].innerText.length < 10) {
             divTask21[i].innerText
        }
        else if (divTask21[i].innerText.length > 10) {
            divTask21[i].innerText = divTask21[i].innerText.slice(0,10) + " ..."
        }
    }    
}

// Task 22
/*
Дан инпут и кнопка.
По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов 
и запишите в инпут.
*/

const loremBtn = document.querySelector('#loremBtn');
let loremInp = document.querySelector('#loremInp');

function randomText () {
    let words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let newWord = '';
    for (let i = 0; i < 8; i++ ) {
        let random = Math.round ( Math.random(words[i]) * words.length);
        newWord += words[random];
            }
    return newWord;
    };
loremBtn.addEventListener('click', function(){
    loremInp.value = randomText()
});

// Task 23
/*
Дан инпут и кнопка.
Пользователь вводит в инпут какую-то строку.
По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
*/

const inpMix = document.querySelector('#inpMix');
const btnMix = document.querySelector('#btnMix');

btnMix.addEventListener('click', () => {
    let result = '';
    for (let i = 0; i < inpMix.value.length; i++){
        let randomNum = Math.floor( Math.random(inpMix.value[i]) * inpMix.value.length)
        result += inpMix.value[randomNum]
    }
    return inpMix.value = result
});

// Task 24 
/*
Дана ссылка.Дан чекбокс.
По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.
*/

const inpCheck = document.querySelector('#inpCheck');
const linkCheck = document.querySelector('#linkCheck');

linkCheck.addEventListener ( 'click', () =>{
    if (inpCheck.hasAttribute('checked')) {
        inpCheck.removeAttribute('checked')
    }
    else inpCheck.setAttribute('checked', 'true')
}
 );

 // Task 25 
 /*
 Дан инпут.
 В него вводится температура в градусах Фаренгейта.
 Сделайте так, чтобы автоматически по мере ввода в абзац под инпутом эта температура выводилась в градусах Цельсия.
 */

const tempF = document.querySelector('#tempF');
const tempC = document.querySelector ('#tempC');

tempF.addEventListener('keyup', () => {
    tempC.innerText = (tempF.value - 32) / 1.8 
    }
);

 // Task 26
 /*
 Дан инпут, кнопка и абзац.
 В инпут вводится число.
 По нажатию на кнопку выведите в абзац факториал этого числа.
 */

 const inpFCT = document.querySelector('#inpFCT');
 const bntFCT = document.querySelector('#bntFCT');
 const parFCT = document.querySelector('#parFCT');
 
 bntFCT.addEventListener('click', () => {
    function factorial (n) {
        return (n != 1) ? n * factorial (n - 1 ) : 1;
    }
    let newNum = factorial (inpFCT.value);
    return parFCT.innerText = newNum
 });
