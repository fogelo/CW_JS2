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
console.log(result)