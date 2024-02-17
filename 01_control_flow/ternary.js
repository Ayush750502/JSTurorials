let val1 = 5 ?? 10;//-> 5
val1 = null ?? 10;//-> 10
val1 = undefined ?? 10;//-> 10
val1 = null ?? 10 ?? 20;//-> 10
// Generally use to handle errors

console.log(val1);

//// Ternary Operator:-

//condition ? true : false

const boardPrice = 100;
boardPrice <= 80 ? console.log("yeh! Let's buy the board.") : console.log("Uhmm! Can't buy the board!");