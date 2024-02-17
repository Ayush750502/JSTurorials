//// singleton
//Object.create();

// object literals

const JSUser = {
    name : "Ayush",
    "full name" : "Ayush Goyal",
    age : 20,
    mail : 'ayush@gmail.com',
    status : false
};

console.log(JSUser["mail"]);
console.log(JSUser.mail);

console.log(JSUser['full name']);//can't be access by dot operater

//Defining Symbols for keys in  object:-

const smbl = Symbol('Key');
const obj = {
    [smbl] : 'Meaning'
};

console.log(obj[smbl]);

////Stopping object value changing:-
//
//Object.freeze(JSUser);
//
//JSUser.mail = "ayush@yahoo.com";
//console.log(JSUser.mail);//-> ayush@gmnail.com

//Adding functions to a object:-

JSUser.greet = function(){
    console.log("Hello "+this.name);
};

console.log(JSUser.greet);//undefined
console.log(JSUser.greet()/**'Hello Ayush'*/);//->undefined
JSUser.greet();//-> 'Hello Ayush'