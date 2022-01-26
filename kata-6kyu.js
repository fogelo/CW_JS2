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


/*? 5Find The Parity Outlier*/
function findOutlier(integers) {
    let odd = integers.filter(item => item % 2 !== 0)
    let even = integers.filter(item => item % 2 === 0)
    return odd.length === 1 ? odd[0] : even[0]
}

const result = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
console.log(result)