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

/*
//@мое решение
function isSquare(n) {
    return Math.floor(Math.sqrt(n)) ** 2 === n ? true : false
}

//@best
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

/*
§4. Isograms
*/

//@ мое
/*function isIsogram(str) {
    return [...new Set(str.toLowerCase())].join('') === str.toLowerCase()
}*/

//best
/*function isIsogram(str) {
    return /(\w).*\1/i.test(str)
}*/

/*
?5. List Filtering
*/

/*filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]*/

//@ мое №1
/*function filter_list(l) {
    return l.filter(item => item !== item.toString())
}*/
//@ мое №2
/*function filter_list(l) {
    return l.filter(item => typeof item === 'number')
}*/

/*const result = filter_list([1, 'a', 'b', 0, 15])
console.log(result)*/

/*?6. Shortest Word*/

/*
//@ мое
function findShort(s) {
    let arr = s.split(' ').map(item=>item.length).sort((a,b)=>a-b)
    return arr[0]
}
const result = findShort("Lisk Classic Steem Ethereum ProofOfStake BTC Monero Mine Classic")
console.log(result)*/


/*?7. Exes and Ohs*/
//@ мое решение
/*function XO(str) {
    let o = str.match(/o/gi)
    let x = str.match(/x/gi)
    return o === null && x === null ? true
        : o === null && x ? false
            : o && x === null ? false : o.length === x.length
}*/

//@ best
/*
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
const result = XO('')
console.log(result)
*/

/*?8. Complementary DNA*/

/*"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]*/

/*function DNAStrand(dna) {
    return dna.split('').map((item => {
        return item === 'A' ? 'T'
            : item === 'T' ? 'A'
                : item === 'G' ? 'C'
                : item === 'C' ? 'G': ''
    })).join('')
}

const result = DNAStrand("ATTGC")
console.log(result)*/

/*§9 Credit Card Mask*/
//@ мое решение
/*function maskify(cc) {
    if (cc.length >= 4) {
        let arr = cc.replace(/(\w{4}$)/, '_$1').split('_')
        return arr[0].split('').fill('#').join('') + arr[1]
    } else {
        return cc
    }
}*/

//@ best  №1
/*function maskify(cc) {
    // оказывается slice умеет копировать элементы с конца строки
    console.log(cc)
    // console.log(cc.slice(0, -4)) // это slice скопирует символы от 0 (отсчет с начала) до (-4 отсчет с конца)
    // console.log(cc.slice(-4)) // этот slice скопирует 4 символа с конца строки
    console.log(cc.slice(4)) // этот slice скопирует 4 символа с конца строки
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
*/

//@ best №2
/*
function maskify(cc) {
    //replace найдет все символы после которых есть 4 символа, то есть не найдет только последние 4 символа
    return cc.replace(/.(?=....)/g, '#');
}

const result = maskify("4556364607935616")
console.log(result)*/

/*?10 Credit Card Mask*/

/*
function getSum(a, b) {
    let args = [a, b]
    args.sort((x, y) => x - y)
    let [x, y] = args
    let result = 0
    for (let i = x; i <= y; i++) {
        result += i
    }
    return x === y ? a : result
}

const result = getSum(0, -1)
console.log(result)*/

/*?11 Sum of two lowest positive integers*/
/*function sumTwoSmallestNumbers(numbers) {
 numbers.sort((a,b)=>a-b)
    return numbers[0] + numbers[1]
}

const result = sumTwoSmallestNumbers([19, 5, 42, 2, 77])
console.log(result)*/

/*?12 Two to One*/

/*function longest(s1, s2) {
    return [...new Set([...s1, ...s2])].sort().join('')
}

const result = longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')
console.log(result)*/

/*§13 Growth of a Population*/
/*function nbYear(p0, percent, aug, p) {
    let result = p0
    let years = 0
    while (result < p) {
        result += result * percent/100 + aug    //result = result + result * percent/100 + aug
        years+=1
    }
    return years
}

const result = nbYear(1500, 5, 100, 5000)*/

/*?14 Find the next perfect square!*/
/*function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0) {
        return Math.pow(Math.sqrt(sq) + 1, 2);
    } else return -1
}

const result = findNextSquare(155)
console.log(result)*/

/*?15 Regex validate PIN code*/

/*
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

const result = validatePIN('123455')
console.log(result)*/

/*?16 Friend or Foe?*/
/*function friend(friends) {
    return friends.filter(item => item.length === 4)
}

const result = friend(["Ryan", "Kieran", "Mark"])
console.log(result)*/

/*?17 Categorize New Member*/
/*//@мое решение
function openOrSenior(data) {
    return data.map(item => item[0] >= 55 && item[1] >= 7 ? 'Senior' : 'Open')
}*/


/*//@best (вставил сюда просто, чтобы запомнить что можно деструктуризировать массив при передаче в функцию сразу в скобках где указываем параметры)
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

const result = openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])
console.log(result)*/

/*?18 isTriangle*/

/*function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

const result = isTriangle(1, 2, 2)
console.log(result)*/


/*?19 Number of People in the Bus*/
//@ мое решение
/*function number(busStops) {
   return busStops.map(item=>item[0]-item[1]).reduce((prev,item)=>prev+item, 0)
}*/

//@ best (немного лучше чем сделал я, просто можно было не делать map, а деструктурировать массив при передаче)
/*function number(busStops) {
   return  busStops.reduce((rem, [on, off]) => rem + on - off, 0);
}

const result = number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])
console.log(result)*/

/*?20 Printer Errors*/

/*function printerError(s) {
    return s.match(/[^a-m]/g) !== null ? `${s.match(/[^a-m]/g).length}/${s.length}` :  `0/${s.length}`
}

const result = printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
console.log(result)*/

/*?20 Binary Addition*/
/*function addBinary(a, b) {
    return (a+b).toString(2)
}

const result = addBinary(2, 5)
console.log(result)*/

/*?20 Odd or Even?*/
//@ мое решение
/*function oddOrEven(array) {
    if (array.length === 0)
        return 'even'
    let sum = array.reduce((prev, item) => prev + item)
    return sum % 2 === 0 || sum === 0 ? 'even' : 'odd'
}*/

/*
//@ best
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0)
}
const result = oddOrEven([])
console.log(result)*/

/*?20 String ends with?*/
/*//@ мое решение
function solution(str, ending) {
    return ending === '' ? true : str.slice(-ending.length) === ending
}*/


/*
//@ best
function solution(str, ending){
    return str.endsWith(ending);
}
const result = solution('abcdeab', '')
console.log(result)
*/


/*?21 Sum of the first nth term of Series*/
//@ my

/*function SeriesSum(n) {
    let arr = [1]
    for (let i = 0; i < n - 1; i++) {
        arr.push(arr[i] + 3)
    }
    return n === 0 ? '0.00'
        : String(Math.round(arr.map(item => 1 / item).reduce((prev, item) => prev + item, 0) * 100))
            .replace(/(?<=^\w)/, '.')
}*/

/*
//@ best
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
         s += 1 / (1 + i * 3)
    }

    return s.toFixed(2)
}

const result = SeriesSum(5)
console.log(result)*/

/*?21 removeSmallest*/
/*
function removeSmallest(numbers) {
    let arr = [...numbers]
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    return arr
}

const result = removeSmallest([2, 2, 1, 2, 1])
console.log(result)*/
