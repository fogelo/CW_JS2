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

//@ best
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}

const result = arrayDiff([1, 2, 2, 3], [1, 2])
console.log(result)