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
function basicOp(operation, value1, value2) {
    return operation === '+' ? value1 + value2
        : operation === '-' ? value1 - value2
            : operation === '*' ? value1 * value2
                : operation === '/' ? value1 / value2 : ''
}

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
//@ best №2
function basicOp(o, a, b) {
    return eval(a+o+b);
}


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
const result = basicOp('+', 4, 7)
console.log(result)