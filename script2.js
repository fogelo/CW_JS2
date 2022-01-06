/*§CW_JS*/

/*?1. написать функцию, которая из строки будет делать hashtag*/

/*
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

/*

//@my solution
function generateHashtag(str) {
    if (str === "") return false
    let arr = str.split(/\s+/).filter((item) => {
        if (item) {
            return item
        }
    })
    let str2 = arr.join(" ")
    if (str2.length >= 140) return false
    let hashTag = "#" + arr.map((item) => {
        if (item) {
            return item[0].toUpperCase() + item.slice(1)
        }
    }).join('')
    if (hashTag === "#") return false
    else return hashTag
}
const result = generateHashtag("         ")
console.log(result)
*/

/*
//@best practices
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
        '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
*/

/*?2. formatDuration*/

/*
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
*/

/*

//@моя попытка решения
function formatDuration(seconds) {
    let years = Math.floor(seconds / 31536000)
    seconds = seconds - years * 31536000
    console.log(years)
    let days = Math.floor(seconds / 86400)
    seconds = seconds - days * 86400
    console.log(days)

    let hours = Math.floor(seconds / 3600)
    console.log(hours)
    seconds = seconds - hours * 3600
    let minutes = Math.floor(seconds / 60)
    console.log(minutes)
    seconds = seconds - minutes * 60
    console.log(seconds)


    let yearsStr = years > 1 ? years + ' years' : years === 1 ? years + ' year' : ""
    let comaOrAnd1 = (years && days && !hours && !minutes && !seconds) ? ' and'
        : (years && !days && hours && !minutes && !seconds) ? ' and'
            : (years && !days && !hours && minutes && !seconds) ? ' and'
                : (years && days && !hours && !minutes && !seconds) ? ", "
                : (!years && days && !hours && !minutes && !seconds) ? " " : ", "


    let comaOrAnd2 = (years || days && hours && !minutes && !seconds) ? ' and' : (years || days && hours || minutes || seconds) ? ", " : ""
    let comaOrAnd3 = (years || days || hours && minutes && !seconds) ? ' and' : (years || days || hours && minutes && seconds) ? ", " : ""
    let comaOrAnd4 = (years || days || hours || minutes && seconds) ? ' and ' : ""

    let daysStr = days > 1 ? days + ' days' : days === 1 ? days + ' day' : ""
    let hoursStr = hours > 1 ? hours + ' hours' : hours === 1 ? hours + ' hour' : ""
    let minutesStr = minutes > 1 ? minutes + ' minutes' : minutes === 1 ? minutes + ' minute' : ""
    let secondsStr = seconds > 1 ? seconds + ' seconds' : seconds === 1 ? seconds + ' second' : ""

    let result = yearsStr + comaOrAnd1 + daysStr + comaOrAnd2 + hoursStr + comaOrAnd3 + minutesStr + comaOrAnd4 + secondsStr


    console.log(result)
    return result
}
*/
/*
//@нашел решение в интернете
function formatDuration (seconds) {
    if ( seconds === 0 ) return 'now' ;
    var typeArr = ['year','day','hour','minute','second'] ;
    var sec = 0 ;
    var minute = 0 ;
    var hour = 0 ;
    var day = 0 ;
    var year = 0 ;
    minute = Math.floor(seconds / 60) ;
    sec = seconds % 60 ;

    hour = Math.floor(minute / 60) ;
    minute = minute % 60 ;

    day = Math.floor(hour / 24) ;
    hour = hour % 24 ;

    year = Math.floor(day / 365) ;
    day = day % 365 ;

    var resultArr = [year,day,hour,minute,sec] ;
    var resultStrArr = [] ;
    for ( var i = 0 ; i < resultArr.length ; i ++ ){
        if ( resultArr[i] === 1 ){
            resultStrArr.push(resultArr[i]+' ' + typeArr[i]) ;
        } else if ( resultArr[i] >= 2 ){
            resultStrArr.push(resultArr[i]+' ' + typeArr[i]+'s') ;
        }
    }
    var resultStr = '' ;
    for ( var i = 0 ; i < resultStrArr.length ; i ++ ){
        if ( i === resultStrArr.length - 2 ){
            resultStr += resultStrArr[i] + ' and ' + resultStrArr[i+1] ;
            break ;
        }
        if ( i !== resultStrArr.length -1 ){
            resultStr += resultStrArr[i] + ', ' ;
        } else {
            resultStr += resultStrArr[i];
        }
    }
    return resultStr ;
}
*/
/*
//@best practices
function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds/time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
*/
// formatDuration(1)
/*



/*
?3. Holiday VIII - Duty Free
!8 kyu
*/

/*
function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice * discount / 100))
}

dutyFree(12, 50, 1000)
*/


/*
?4. Well of Ideas - Easy Version
!8 kyu
*/

/*
function well(x) {
    let goodIdeas = x.filter((item) => item === 'good')
    if (goodIdeas.length === 1 || goodIdeas.length === 2) {
        return 'Publish!'
    } else if (goodIdeas.length > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}
*/

/*
?5. BASIC: Making Six Toast.
!8 kyu
*/

/*
function sixToast(num) {
    return Math.abs(num-6)
}
*/


/*
?6. Sentence Smash
!8 kyu
*/

/*
function smash (words) {
    return words.join(" ")
}
*/

/*
?7. MakeUpperCase
!8 kyu
*/
/*
function makeUpperCase(str) {
    return str.toUpperCase()
}
*/

/*
?8. Rock Paper Scissors!
!8 kyu
*/

/*
//@мое решение
const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!'
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!'
    } else if (p1 === 'paper' && p2 === 'scissors') {
        return 'Player 2 won!'
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return 'Player 2 won!'
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!'
    } else if (p1 === 'rock' && p2 === 'paper') {
        return 'Player 2 won!'
    } else if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!'
    }
};

//@best practices
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};
*/

/*
?9. Thinkful - Logic Drills: Traffic light
!8 kyu
*/

/*
function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow'
        case 'yellow':
            return 'red'
        case 'red':
            return 'green'
    }
}
*/

/*
?10. Grasshopper - Check for factor
!8 kyu
*/

/*
function checkForFactor(base, factor) {
    return base % factor === 0 ? true : false
}
*/

/*
?11. Quarter of the year
!8 kyu
*/

/*
const quarterOf = (month) => {
    switch(month){
        case 1:
        case 2:
        case 3:
            return 1
        case 4:
        case 5:
        case 6:
            return 2
        case 7:
        case 8:
        case 9:
            return 3
        case 10:
        case 11:
        case 12:
            return 4
    }
}
*/

/*
?12. Grasshopper - Grade book
!8 kyu
*/


/*
function getGrade(s1, s2, s3) {

    let score = (s1 + s2 + s3) / 3

    return 90 <= score && score <= 100 ? 'A'
        : 80 <= score && score < 90 ? 'B'
            : 70 <= score && score < 80 ? 'C'
                : 60 <= score && score < 70 ? 'D'
                    : 0 <= score && score < 60 ? 'F' : ""
}
*/


/*
?13. Will there be enough space?
!8 kyu
*/

/*function enough(cap, on, wait) {
    if((cap - on - wait) >= 0) {
        return 0
    } else if (cap - on - wait > 0) {
        return Math.abs(cap - on - wait)
    }
}*/


/*
§14. Sum of Intervals
!4 kyu
*/

/*
//@Решение из интернета
//! Реши еще и сам
function sumIntervals(intervals){
    intervals = intervals.sort(function(a, b) { // O(n)
        return a[0] - b[0];
    });
    intervals = intervals.reduce(function(acc, el, index, array) { // O(n)
        const anterior = array[index - 1];
        if (array.length > 1 && anterior !== undefined) {
            if (el[0] < acc[acc.length - 1]) {
                if (el[1] >= acc[acc.length - 1]) {
                    acc[acc.length - 1] = el[1];
                }
            } else {
                acc.push(...el);
            }
        } else {
            acc.push(...el);
        }
        return acc;
    }, []);
    let result = 0;
    for (let i = 0; i < intervals.length - 1 ; i+=2) { // O(2n)
        result+=(intervals[i + 1] - intervals[i]);
    }
    return result;
}*/


/*
?15. Student's Final Grade
!8 kyu
*/

/*function finalGrade(exam, projects) {
    return exam > 90 || projects > 10 ? 100
        : exam > 75 && projects >= 5 ? 90
            : exam > 50 && projects >= 2 ? 75
                : 0
}*/


/*
?16. Beginner Series #1 School Paperwork
!8 kyu
*/

/*function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}*/


/*
§17 DNA to RNA Conversion.
!8 kyu

"GCAT"  =>  "GCAU"
*/

/*function DNAtoRNA(dna) {
     return dna.replace(/[T]/g, 'U')
}*/


/*
?18. Points of Reflection
!8 kyu
*/

/*function symmetricPoint(p, q) {
    return [2*q[0]-p[0], 2*q[1]-p[1] ]
}*/

/*
?19. Twice as old
!8 kyu
*/

/*function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}*/


/*
?20. Is he gonna survive?
!8 kyu
*/

/*//@мое решение
function hero(bullets, dragons){
    return dragons/bullets*2 <= 1 ? true : false
//Get Coding!
}*/

/*//@best practices
//! когда есть операторы сравнения незачем явно возвращать true или false
function hero(bullets, dragons){
    return bullets >= dragons * 2
}*/


/*
?21. Square(n) Sum
!8 kyu
*/

/*function squareSum(numbers){
    return numbers.reduce(((prev, item)=> prev+item**2), 0)
}*/

/*
?21. Vowel remover
!8 kyu
*/

/*function shortcut(string){
    return string.replace(/[aeiou]/g, '')
}*/


/*
?22. Calculate BMI
!8 kyu
*/

/*function bmi(weight, height) {
    let bmi = weight / height ** 2
    return bmi <= 18.5 ? "Underweight"
        : bmi <= 25 ? "Normal"
            : bmi <= 30 ? "Overweight"
                : bmi > 30 ? "Obese"
                    : ''
}*/


/*
?22. Even or Odd
!8 kyu
*/

/*function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}*/

/*
?23. Sum of positive
!8 kyu
*/

/*function positiveSum(arr) {
    let positiveNumbers = arr.filter((item) => item >= 0)
    return positiveNumbers.reduce((prev, item) => prev + item, 0)
}*/

/*
?24. Return Negative
!8 kyu
*/

/*function makeNegative(num) {
    return num <= 0 ? num : num * -1
}*/

/*
?25. Opposite number
!8 kyu
*/

/*function opposite(number) {
    return number * -1
}*/


/*
?25. Remove First and Last Character
!8 kyu
*/

/*//@Мое решение
function removeChar(str){
    let arr = str.split('')
    delete arr[0]
    delete arr[arr.length-1]
    return arr.join('')
}*/

//@best
/*function removeChar(str) {
    return str.slice(1, -1);
}*/

/*
?26. Convert boolean values to strings 'Yes' or 'No'.
!8 kyu
*/

/*
function boolToWord( bool ){
    return bool ? 'Yes' : 'No'
}*/

/*
?27. String repeat
!8 kyu
*/

/*function repeatStr (n, s) {
    return s.repeat(n)
}*/

/*
?28. Reversed Strings
!8 kyu
*/

function solution(str) {
    return str.split('').reverse().join('')
}


/*
?28. Convert a Number to a String!
!8 kyu
*/

/*function numberToString(num) {
    return num + ''
}*/

/*
?29. Grasshopper - Summation
!8 kyu
*/

/*function summation(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i
    }
    return result
}*/

/*
?30. Find the smallest integer in the array
!8 kyu
*/

function findSmallestInt(args) {
    return Math.min(...args)
}

const result = findSmallestInt([34, 15, 88, 2])
console.log(result)
