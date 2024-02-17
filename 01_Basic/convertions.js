let score = "33";
let num = Number(score);
console.log(typeof(score),typeof(num));
console.log(score,num);

score = "aabb33";
num = Number(score);
console.log(typeof(score),typeof(num));
console.log(score,num);
//num = NaN i.e not a number and it is integer type

let check = true;
console.log(typeof(check), check);

let chk = Number(check);
console.log(typeof(chk), chk);
//boolean values: true => 1 , false => 0

check = Boolean(chk);
console.log(typeof(check), check);

chk = 0;
console.log(typeof(chk), chk);

let emt;
console.log(typeof(emt), emt);

let empty = Boolean(emt);
console.log(typeof(empty), empty);
// Boolean: undefined => false


let str = "empty = "+String(empty)+"\nnumber = "+String(num);
console.log(str);