let name = 'Ninja'

let id = 12345

console.log(`Hello ${name} and your id is '${id}'`);

let str = new String('Let get started!');

console.log(str[2]);
console.log(str.__proto__);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(5));
console.log(str.indexOf('t'));

console.log(str.substring(0,4))

console.log(str.slice(-8,11))
let newStr = "    |" + str + "......   "
console.log(newStr.trim())


let arr = str.split(' ');
console.log(arr);