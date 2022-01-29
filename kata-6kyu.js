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


/*§6 Count the number of Duplicates*/

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

//@ best
/*
* Что я узнал из этого решения? Узнал, что можно сделать проверку когда match возвращает null, а не сразу пытаться
* обратиться к его свойству length. Можно учесть, что если match вернет не массив найденных элементов, а null можно вернуть пустой массив.
* */
/*function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}*/


/*const result = duplicateCount("")
console.log(result)*/


/*§7 Duplicate Encoder*/

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
/*
* Что я узнал из этого решения?
* Узнал как можно использовать третий аргумент (массив) в методах массива
* */

/*function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}*/

//@ best №2
/*
* Что я узнал из этого решения?
* В очередной раз убедился, что replace крутой метод. Он заменит каждое соответствие которое найдет на то, что вернет
* функция переданная вторым аргументом
* */

/*function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) === word.lastIndexOf(m) ? '(' : ')');
}*/


/*const result = duplicateEncode('wOOxz)aOOOOeb')
console.log(result)*/

/*§8 Your order, please*/ /*§разобраться со своим решение проговорить, что оно делает и разобраться с решением best*/
//@ my
/*
* Благодаря своему решению понял как можно сортировать массив из объектов по их свойствам
* */
/*function order(words) {
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
}*/

//@ best
/*
* Что я узнал из этого решения?
* Узнал что с методом sort можно неординарно сортировать элементы массивов, можно их сортировать по их какой-то
* отличительной особенности, например числу внутри слова
*
* */

/*
function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
*/


/*const result = order("is2 Thi1s T4est 3a")
console.log(result)*/


/*?9 Split Strings*/

//@ my №1 (принял)
/*function solution(str) {
    if (str.length) {
        let result = []
        for (let i = 0; i < str.length; i += 2) {
            result.push(str.slice(i, i + 2))
        }
        if (result[result.length - 1].length === 2) {
            return result
        } else {
            result[result.length - 1] += '_'
        }
        return result
    } else {
        return []
    }
}*/


/*//@ my №2 (примет если сделать что если на входе будет пустая строка функция вернет пустой массив)
function solution(str) {
    return str.length % 2 === 0 ? str.match(/\w\w/g) : str.match(/\w\w/g).concat([str[str.length - 1] + '_'])
}*/

//@ best
/*
* Действительно было проще сначала прибавить к строке '_' и уже потом делать манипуляции, если надо взять если нет отсечь
*
* */
/*function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}
const result = solution("abc")
console.log(result)*/


/*§10  IP Validation*/
//@ my
/*
function isValidIP(str) {
    if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str)) {
        let arr = str.split('.')
        return arr.every(item => /^2[0-4][0-9]$/.test(item)
            || /^25[0-5]$/.test(item)
            || /^1[0-9][0-9]$/.test(item)
            || /^[1-9][0-9]$/.test(item)
            || /^[0-9]$/.test(item))
    }
    return false
}
*/


//@ best №1
/*
* Что я узнал из этого решения?
* Понял, что все таки можно было решить эту задачу одним регулярным выражением
* */
/*function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}*/

//@ best №2
/*function isValidIP(str) {
    return str.split('.').filter(item => item === Number(item).toString() && Number(item) < 256).length === 4;
}*/

/*
const result = isValidIP('41.227.40.36')
console.log(result)
*/


/*?11 Valid Phone Number*/

function validPhoneNumber(phoneNumber){
    return /\(\d{3}\)\s\d{3}-\d{4}/.test(phoneNumber)
}

const result = validPhoneNumber("(123) 456-7890")
console.log(result)

/*
"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/
