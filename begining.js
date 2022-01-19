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
decodeMorse = function (morseCode) {

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
decodeMorse('...---... --..-- ......')
 */

//? 5) Написать функцию, которая будет возвращать массив без повторяющихся символвов


// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// var uniqueInOrder = function (iterable) {

//     if (!iterable[0] || iterable==='') {
//         return []
//     }
//     else if (iterable) {
//         let uniq = []
//         let array = [...iterable]
//         // console.log(array)
//         array.reduce((previousValue, item, index, arr) => {
//             // console.log('previousValue: ', previousValue);
//             if (previousValue === item) {
//                 return item
//                 console.log(1)
//             } else {
//                 uniq.push(item)
//                 return item
//             }
//         }, array[0])
//         //your code here - remember iterable can be a string or an array
//         // console.log(uniq)/
//         let uniq2 = [array[0], ...uniq]
//         console.log(uniq2)
//         return uniq2
//     }
// }


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

/*
let recursionDepth = []

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
console.log('result: ', result);
*/

//? 8)

/*
1
3     5
7     9    11
13    15    17    19
21    23    25    27    29
...
*/

/* 1 -->  1
2 --> 3 + 5 = 8 */

/*
//Мое решение
function rowSumOddNumbers(row) {
    let triangularArray = []
    let number = 1

    let firstLineNumber = row * (row - 1) + 1
    console.log('firstLineNumber: ', firstLineNumber);

    for (i = 0; number <= firstLineNumber; i++) {
        triangularArray.push(number)
        number = number + 2
    }

    console.log('triangularArray: ', triangularArray);
    let number2 = firstLineNumber
    for (i = 0; i < (row - 1); i++) {
        number2 = number2 + 2
        triangularArray.push(number2)
    }
    console.log('triangularArray: ', triangularArray);

    let rowArray = triangularArray.filter((item) => {
        return item >= firstLineNumber
    })
    console.log('rowArray: ', rowArray);

    let result = rowArray.reduce((previousValue, item) => {

        return previousValue + item
    })
    console.log('result: ', result);

    return result
}
rowSumOddNumbers(2)
 */
/*
//Best practices
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
rowSumOddNumbers(2) */

//? 9)
/*
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/
/*
//Мое решение
function getMiddle(word) {
    let length = word.length
    console.log('length: ', length);
    let letters = []

    if (length % 2 === 0) {
        let middleIndex = length / 2
        letters.push(word[middleIndex-1])
        letters.push(word[middleIndex])
        console.log('letters: ', letters);
        let middle = letters.join('')
        console.log('middle: ', middle);
        return middle
    }

    if (length % 2 !== 0) {
        let middleLetterIndex = Math.round(length / 2)
        letters.push(word[middleLetterIndex-1])
        console.log('letters: ', letters);
        let middle = letters.join('')
        console.log('middle: ', middle);
        return middle
    }
}
 */
/*
//Best practices

function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


console.log(getMiddle('tenet'))
*/

//? 10)

/*
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
*/

/*
//Мое решение
const binaryArrayToNumber = arr => {
    let reverseArr = arr.reverse()

    let result = 0
    for (i = 0; i < reverseArr.length; i++) {
        result = result + Math.pow(2, i)*reverseArr[i]
    }
    console.log('result: ', result);
    return result
};
*/

/*
//Best practices №1
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([0, 0, 1, 1]))
*/


/*
//Best practices №2 (в этом решении применяются побитовые операторы)

function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
} */


//? 11) Find the missing letter

/*
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/
/*

//Мое решение (практически совпадает с best practice)

function findMissingLetter(letters) {
    console.log('array: ', letters);
    let decimalNumbers = letters.map((item) => item.charCodeAt())
    for (i = 0; i < decimalNumbers.length; i++) {
        console.log('difference', decimalNumbers[i]);
        if (decimalNumbers[i + 1] - decimalNumbers[i] === 2) {
            let missingCharCode = (decimalNumbers[i + 1] + decimalNumbers[i]) / 2
            console.log('missingCharCode: ', missingCharCode);
            let missingLetter = String.fromCharCode(missingCharCode)
            console.log('missingLetter: ', missingLetter);
            return missingLetter
        }
    }
}
let letters = ["a", "b", "c", "d", "f"]
findMissingLetter(letters)
 */

//? 12) Написать функцию, которая будет проверять что в b находятся квадраты чисел, которые находятся в массиве а (могут идти не по порядку)

/*
array1 = [121, 144, 19, 161, 19, 144, 19, 11]
array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

array1 = [121, 144, 19, 161, 19, 144, 19, 11]
array2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
*/

/*
function comp(array1, array2) {
    if (array1.length == 0) {
        return false
    }
    if (array2.length == 0) {
        return false
    }
    if (array1.length !== array2.length) {
        return false
    }
    let squares = array1.map((item) => Math.pow(item, 2))
    let squares2 = [...squares]
    for (i = 0; i < squares.length; i++) {
        let index = array2.indexOf(squares2[0], 0)
        if (index === -1) {
            return false
        } else {
            squares2.splice(0, 1)
            array2.splice(index, 1)
        }
    }
    return true
}
*/


//? 13) Функция, которая выстраивает нечетные числа по порядку, а четные оставляет на своих позициях

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

/*
//Мое решение
function sortArray(array) {
    let oddNumbers = []
    let indexOddNumbers = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i])
            indexOddNumbers.push(i)
            delete array[i]
        } else {
            oddNumbers.push()
        }
    }
    console.log('array: ', array);
    console.log('oddNumbers: ', oddNumbers);
    console.log('indexOddNumbers: ', indexOddNumbers);
    oddNumbers.sort((a, b) => a - b)
    console.log('oddNumbers: ', oddNumbers);
    let f = 0;
    for (i = 0; i < array.length; i++) {
        if (!array[i] && array[i] !== 0) {
            array[i] = oddNumbers[f]
            f = f + 1
        }
    }
    console.log('array: ', array);
    return array

}
*/


////Best practices
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }

// let a = sortArray(arr)


//? 14) написать алгоритм, который при сортировке будет смещать все нули в конец

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

let arr = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1]

////Мое решение

/*
let moveZeros = function (arr) {
    let arr2 = arr.filter((item, index) => {
        return item !== 0
    })
    let arr3 = arr.filter((item, index) => {
        return item === 0
    })
    for (i = 0; i < arr3.length; i++) {
        arr2.push(0)
    }
    return arr2
}
 */


// ////Best practices
// let moveZeros = function (arr) {
//     return  arr.filter((i) => i !== 0).concat(arr.filter((i)=> i === 0))
//  }
// moveZeros(arr)


//? 15) написать функцию, которая будет возвращать первую буквку строки, которая не повторяется больше


/*
/////Мое решение
let s = 'moon'


function firstNonRepeatingLetter(s) {
    if (s === '') {
        return ''
    }
    s1 = s.toLowerCase()
    let letters = [...s1]

    for (i = 0; i < letters.length; i++) {
        let letters2 = [...letters]
        letters2.splice(i, 1)
        console.log('letters2: ', letters2);
        let letter = letters2.indexOf(letters[i], 0)
        console.log('letter: ', letter);
        if (letter === -1) {
            return s[i]
        }
    }
    return ''
}
*/


////Best practices

/*
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

let letter = firstNonRepeatingLetter(s)
console.log('letter: ', letter);
 */

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log('foo.x : ', foo.x );


const initialArray = [
    { id: 1, name: "item one", tags: ["music", "sport", "science"] },
    { id: 2, name: "item two", tags: ["music"] },
    { id: 3, name: "item three", tags: ["fun"] },
    { id: 4, name: "item four", tags: ["sport", "science"] },
    { id: 5, name: "item five", tags: [] },
    { id: 6, name: "item six", tags: ["sport"] }
];

const tags = ['music', 'sport', 'science', 'fun']


function makeCorrectResult(initialArray, tags) {
    const correctResult = []
    const sport = initialArray.filter((item, index) => {
        return item.tags.includes("sport", 0)
    })
    correctResult






    console.log('correctResult: ', correctResult);
    return correctResult

}
function makeCorrectResult(initialArray) {
    const sport = initialArray.filter((item, index) => {
        return item.tags.includes("sport", 0)
    })

    const music = initialArray.filter((item, index) => {
        return item.tags.includes("music", 0)
    })

    const science = initialArray.filter((item, index) => {
        return item.tags.includes("science", 0)
    })

    const fun = initialArray.filter((item, index) => {
        return item.tags.includes("fun", 0)
    })


    const correctResult = { sport, music, science, fun }
    console.log('correctResult: ', correctResult);
    return correctResult

}

makeCorrectResult(initialArray)


/*   export const correctResult = {
    sport: [
      { id: 6, name: "item six", tags: ["sport"] },
      { id: 4, name: "item four", tags: ["sport", "science"] },
      { id: 1, name: "item one", tags: ["music", "sport", "science"] }
    ],
    music: [
      { id: 2, name: "item two", tags: ["music"] },
      { id: 1, name: "item one", tags: ["music", "sport", "science"] }
    ],
    science: [
      { id: 1, name: "item one", tags: ["music", "sport", "science"] },
      { id: 4, name: "item four", tags: ["sport", "science"] }
    ],
    fun: [{ id: 3, name: "item three", tags: ["fun"] }],
    "without tag": [{ id: 5, name: "item five", tags: [] }]
  }; */