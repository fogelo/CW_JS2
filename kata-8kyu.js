/*
?1. Abbreviate a Two Word Name
*/

function abbrevName(name) {
    let x = name.toUpperCase().split(' ')
    return x[0][0] + '.' + x[1][0]
}

/*
?2. Convert number to reversed array of digits
*/

function digitize(n) {
    return [...n.toString()].map(item=>Number(item)).reverse()
}