function getRandomNumber () {
    return Math.round(Math.random() * 10)
}
let random = getRandomNumber()

function areNumbersEqual (item) {
     if (+item == random) {
        alert(`true ,the number = ${random}`)
    }
    else 
        alert (`false ,the number = ${random}` )
}
