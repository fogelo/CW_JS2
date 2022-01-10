/*
§1. Highest and Lowest
*/

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

/*//@ мое решение
function highAndLow(numbers) {
    let sortedNumbers = numbers.split(' ')
    sortedNumbers.forEach((item, index) => {
        return sortedNumbers[index] = Number(item)
    })
    let minmax = [Math.max(...sortedNumbers), Math.min(...sortedNumbers)]
    let result = minmax.join(' ')
    return result
}
const result = highAndLow("1 2 -3 4 5")
console.log(result)*/

/*//@ best practices
//apply - удобный способ передать массив данных в качестве параметров функции.
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}*/

/*
?2. Descending Order
*/

/*function descendingOrder(n) {
   return  Number(n.toString().split('').map(item=>Number(item)).sort((a,b)=>b-a).join(''))
}

const result = descendingOrder(42145)
console.log(result)*/

/*
?3. You're a square!
*/

//@мое решение
function isSquare(n) {
    return Math.floor(Math.sqrt(n)) ** 2 === n ? true : false
}

//@best
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

const result = isSquare(84)
console.log(result)