//? 1) Написать функцию, чтобы она высчитывала сумму как написано ниже
/*
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */
/*
//Мое решение
function calculator(number) {
    string = String(number)
    console.log(string, typeof string)
    stringsArray = string.split('')
    console.log(stringsArray, typeof stringsArray)

    let numbersArray = stringsArray.map((item, index, arr) => {
        return +item
    })
    console.log(numbersArray)

    arraySum = numbersArray.reduce((previousValue, currentItem, index, arr) => {
        return previousValue + currentItem
    }, 0)
    console.log(arraySum)
    if (arraySum < 10) {
        return arraySum
    } else {
        calculator(arraySum)
    }
}

calculator(752)
*/

//? 2) Написать функцию, которая будет форматировать введеный номер так как написано ниже
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

/*
function createPhoneNumber(numbers) {

    let strings = numbers.map((item, index, arr) => {
        return item + ''
    })
    let number = '(' + strings[0] + strings[1] + strings[2] + ')' + ' '
    + strings[3] + strings[4] + strings[5] + '-' + strings[6] + strings[7] + strings[8] + strings[9]
    return number

}
let number = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(number)
 */

//? 3) Написать функцию, которая будет принимать строку и выводить строку из чисел соостветсвющих порядковому номеру в алфавите каждой букве

/*
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function alphabetPosition(text) {
    text = text.toLowerCase()
    textLetters = text.split('')
    console.log(textLetters)
    let numbers = []
    textLetters.forEach(item => {
        numbers.push(letters.indexOf(item, 0) + 1)
    });
    numbers = numbers.filter((item, index, array) => {
        return item > 0
    })
    console.log(numbers)
    numbers = numbers.map((item) => {
        return item + ''
    })
    numbers = numbers.join(' ')
    console.log(numbers, typeof numbers)
    text=numbers
    console.log(text)
    return text;
}
alphabetPosition("The sunset sets at twelve o' clock.")
*/


//? 4) Написать функцию, которая будет декодировать сигнал Морзе на английский язык
// decodeMorse('.... . -.--   .--- ..- -.. .')
/*
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z','sos','!','.']
let morseAlphabet = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..',
    '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.',
    '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..','...---...','--..--','......']
     */
/*decodeMorse = function (morseCode) {

    let numbers = []
    let sentence = []
    let arr = []
    arr = morseCode.split(' ')


    arr.forEach((item, index, arr) => {
        numbers.push(morseAlphabet.indexOf(item, 0) + 1)
    })
    if (numbers.length === 1) {
        console.log(alphabet[numbers[0] - 1].toUpperCase())
        return alphabet[numbers[0] - 1].toUpperCase().trim()
    } else {
        numbers.forEach((item, index, arr) => {
            if (item - 1 > 0) {
                sentence.push(alphabet[item - 1])

            } else {
                sentence.push(' ')
            }
        })
        sentence = sentence.join(' ')
        sentence = sentence.split('     ')
        sentence = sentence.map((item, index, arr) => {
            return item = item.split(' ').join('')
        })
        sentence = sentence.join(' ')
        //your code here
        sentence = sentence.toUpperCase()
        console.log(sentence)
        return sentence.trim()
    }
}
decodeMorse('...---... --..-- ......')*/


//? 5) Написать функцию, которая будет возвращать массив без повторяющихся символвов

/*uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

/*
var uniqueInOrder = function (iterable) {

    if (!iterable[0] || iterable==='') {
        return []
    }
    else if (iterable) {
        let uniq = []
        let array = [...iterable]
        // console.log(array)
        array.reduce((previousValue, item, index, arr) => {
            // console.log('previousValue: ', previousValue);
            if (previousValue === item) {
                return item
                console.log(1)
            } else {
                uniq.push(item)
                return item
            }
        }, array[0])
        //your code here - remember iterable can be a string or an array
        // console.log(uniq)/
        let uniq2 = [array[0], ...uniq]
        console.log(uniq2)
        return uniq2
    }
}*/

//? 6) Написать функцию, которая будет убирать подчеркивания и тире

/* function toCamelCase(str) {
    let strArr = [...str]
    let newArr = []
    strArr.reduce((previousValue, item, index, arr) => {
        if (previousValue === '-') {
            newArr.push(1)
        } else {
            newArr.push(2)
        }
    }, strArr[0])
    console.log(newArr)
}

toCamelCase("the-stealth-warrior") */

//? 7)

/*
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

/*let recursionDepth = []

function persistence(num) {
    if(num<10){
        return 0
    }
    let string = String(num)
    console.log('string: ', string);
    let strings = string.split('')
    console.log('strings: ', strings);
    let numbers = strings.map((item) => {
        return Number(item)
    })

    console.log('numbers: ', numbers);

    let pers = numbers.reduce((previousValue, item, index, arr) => {
        return previousValue * item
    })
    recursionDepth.push('x')
    if (pers >= 10) {
        persistence(pers)
    }
    return recursionDepth.length
}

let result = persistence(9999)
console.log('result: ', result);*/

