/*?1 Array.diff*/
//@ my
/*
function arrayDiff(a, b) {
    let resultArr = []
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i]))
            resultArr.push(a[i])
    }
    return resultArr
}
*/

/*
//@ best
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}

const result = arrayDiff([1, 2, 2, 3], [1, 2])
console.log(result)*/

/*?2 Stop gninnipS My sdroW!*/
/*
function spinWords(string) {
    return string
        .split(' ')
        .map(item => item.length > 4 ? item.split('').reverse().join('') : item)
        .join(' ')
}

const result = spinWords("You are almost to the last test")
console.log(result)

*/

/*§3 Find the odd int*/ /*§ разобраться с побитовыми операторами, в частности как это работает здесь*/

/*//@ my
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let arr = A.filter(item => item === A[i])
        if (arr.length === 1 || arr.length % 2 !== 0)
            return A[i]
            }
    return []
}*/

//@ best
/*const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
const result = findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])
console.log(result)*/


/*?4 Who likes it?*/
/*function likes(names) {
    let len = names.length
    return len === 0 ? 'no one likes this'
        : len === 1 ? `${names[0]} likes this`
            : len === 2 ? `${names[0]} and ${names[1]} like this`
                : len === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
                    : len > 3 ? `${names[0]}, ${names[1]} and ${len - 2} others like this` : ''
}


const result = likes(['Alex', 'Jacob', 'Mark', 'Max'])
console.log(result)*/


/*?5 Find The Parity Outlier*/
/*
function findOutlier(integers) {
    let odd = integers.filter(item => item % 2 !== 0)
    let even = integers.filter(item => item % 2 === 0)
    return odd.length === 1 ? odd[0] : even[0]
}

const result = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
console.log(result)*/


/*§6 Count the number of Duplicates*/ /*§разобраться как работает код в best варианте*/

//@ my
/*function duplicateCount(text) {
    let newText = text.toLowerCase()
    let notUniqChars = []
    for (let i = 0; i < newText.length; i++) {
        if (newText.includes(newText[i], i + 1)) {
            notUniqChars.push(newText[i])
        }
    }
    return [...new Set(notUniqChars)].length
}*/

/*
//@ best
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
const result = duplicateCount("Indivisibilities")
console.log(result)*/


/*§7 Duplicate Encoder*/ /*§ разобраться с бестами*/

//@ my
/*function duplicateEncode(word) {
    let uniqChars = [...new Set([...word.toLowerCase()])]
    let allChars = [...word.toLowerCase()]
    let notUniqChars = []
    let result = []
    for (let i = 0; i < uniqChars.length; i++) {
        if (allChars.filter(item => item === uniqChars[i]).length > 1) {
            notUniqChars.push(uniqChars[i])
        }
    }
    for (let i = 0; i < allChars.length; i++) {
        if (notUniqChars.some(item => item === allChars[i])) {
            result.push(')')
        } else {
            result.push('(')
        }
    }
    return result.join('')
}*/

//@ best №1
/*function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}*/

//@ best №2
/*function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}*/

//@ best №3
/*
function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}
*/

/*
const result = duplicateEncode('wOOxz)aOOOOeb')
console.log(result)*/

/*§8 Your order, please*/ /*§разобраться со своим решение проговорить, что оно делает и разобраться с решением best*/
//@ my
function order(words) {
    if (words) {
        let array = words.split(' ')
        let result = []
        for (let i = 0; i < array.length; i++) {
            let number = array[i].match(/\d/g)[0]
            result.push({id: number, string: array[i]})
        }
        result.sort((a, b) => Number(a.id) - Number(b.id))
        return result.map(item => item.string).join(' ')
    } else {
        return ""
    }
}

//@ best
/*function order(words){

    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}*/

const result = order("is2 Thi1s T4est 3a")
console.log(result)

