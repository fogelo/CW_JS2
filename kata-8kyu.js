/*
?1. Abbreviate a Two Word Name
*/

/*function abbrevName(name) {
    let x = name.toUpperCase().split(' ')
    return x[0][0] + '.' + x[1][0]
}*/

/*
?2. Convert number to reversed array of digits
*/

/*function digitize(n) {
    return [...n.toString()].map(item=>Number(item)).reverse()
}*/

/*
§3. Basic Mathematical Operations потренироваться в case
*/

//@ my
/*
function basicOp(operation, value1, value2) {
    return operation === '+' ? value1 + value2
        : operation === '-' ? value1 - value2
            : operation === '*' ? value1 * value2
                : operation === '/' ? value1 / value2 : ''
}
*/

//@ best №1
/*function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}*/
/*//@ best №2
function basicOp(o, a, b) {
    return eval(a+o+b);
}*/


//@ best №3
/*function basicOp(operation, value1, value2)
{
    var cases = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
    };
    return cases[operation]
}*/
/*
const result = basicOp('+', 4, 7)
console.log(result)*/

/*
?4. Regex count lowercase letters
Your task is simply to count the total number of lowercase letters in a string.
*/

/*function lowercaseCount(str) {
    return (str.match(/[a-z]/g) || []).length
}

const result = lowercaseCount('abcABC123')
console.log(result)*/

/*
?5. String cleaning
*/

/*
function stringClean(s){
    return s.replace(/\d/g, '')
}

const result = stringClean('abcABC123')
console.log(result)
*/


/*
?6. Is n divisible by x and y?
*/

/*
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

const result = isDivisible(11, 3, 4)
console.log(result)*/


/*
?7. Convert a String to a Number!
*/
/*let stringToNumber = function(str){
    return Number(str)
}*/

/*
?8. Century From Year
*/

/*
function century(year) {
    return Math.ceil(year/100);
}

const result = century(89)
console.log(result)
*/

/*
?9. Keep Hydrated!
*/

/*
function litres(time) {
    return Math.floor(time*0.5);
}

const result = litres(3)
console.log(result)*/

/*
?10. Reversed Words
*/

/*
function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

const result = reverseWords("hello world!")
console.log(result)
*/

/*
?11. Count of positives / sum of negatives
*/

/*
function countPositivesSumNegatives(input) {
    if ((input || []).length === 0)
        return []
    let positive = (input.filter(item => item > 0) || []).length
    let negative = input.filter(item => item < 0).reduce((prev, item) => prev + item, 0)
    return [positive, negative];
}

const result = countPositivesSumNegatives(null)
console.log(result)
*/

/*
?12.Get the mean of an array
*/

function getAverage(marks) {
    return Math.floor(marks.reduce((prev, item) => prev + item, 0) / marks.length)
}

const result = getAverage([1,2,3,4,5,])
console.log(result)