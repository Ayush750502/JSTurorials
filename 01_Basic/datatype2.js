// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt
//null => gives type of 'object'
//undeclared variable -> gives type of undefined

// Reference (Non-Primitive)

// Array , Objects , Functions

const heros = ['Deku' , 'Uravity' , 'One Punch Man'];

let obj = {
    name : "Ayush",
    age : "20",
    Program : "B.Tech CSE"
}

const fun = function(){
    console.log(typeof this);
    console.log("Function is running !");
}

fun.call();
console.log(typeof fun)//-> function