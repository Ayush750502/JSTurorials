// Basic memory are available as 
//1. Stack
//2. Heap

//Stack:- [For Primitive datatype ]

//+-------------+
//|   Stack     |
//+-------------+
//|-------------|
//|-------------|
//|-------------|
//|-------------|
//|-------------|
//+-------------+

let name = 'Ninja'
let mail = 'ninja@shadow.com'
let contact = 1111111111;
//Here a copy of value is given to the variable
let usermail = mail
mail = "hiddenleaf@village.com"
console.log(mail);
console.log(usermail);

//Heap:- [For non primitive datatype ]

//+---------------+
//|               |
//|               |
//|    heap       |
//|               |
//|               |
//+---------------+


let user01 = {
    name : 'Saruka',
    anime : 'Naruto'
}
//Here the reference of object is passed to user02
let user02 = user01

user02.anime = 'Naruto Shinpuden'

console.log('user01');
console.log(user01);
console.log('user02');
console.log(user02);