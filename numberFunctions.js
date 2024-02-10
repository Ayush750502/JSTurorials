const numOne = 128.37

console.log(numOne.toFixed(2));//for deciaml value
console.log(numOne.toPrecision(3));//can be used for any value but show only mentioned number of digits
console.log(numOne.toPrecision(4));//can be used for any value

const numTwo = 1000000;

console.log(numTwo.toLocaleString())//shows number with comas : 1,000,000
console.log(numTwo.toLocaleString('en-IN'))//10,00,000 // Indian fashion


//--------------------Some Maths functionallity------------------------//

console.log(Math);//Object
console.log(Math.abs(-4));//absolute value : 4
console.log(Math.round(4.6));//absolute value : 5
console.log(Math.ceil(4.1));//absolute value : 5
console.log(Math.floor(4.9));//absolute value : 4



console.log(Math.random());//random values :in between 0 and 1
console.log((Math.random()*10) +1);//random values :in between 0 and 1

const liminit = 10;//Min
const limfnl = 20;//Max
let randNum = Math.floor(Math.random() * (limfnl - liminit + 1) + liminit)

console.log("Random Number by formula: " + randNum);//Value will vary from 10 to 20