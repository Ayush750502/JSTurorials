const obj = {
    id : 12345,
    name : {
        first : "Ayush",
        last : "Goyal"
    }//Nested Object

};

console.log(obj.name.first);

const obj0 = {
    mail : "ayush@mail.com",
    phone_no : 1234567890
};

// Merging two object in another object:-

const obj1 = Object.assign({} , obj , obj0);
//          or
const obj2 = {...obj , ...obj0}
console.log(obj1);
console.log(obj2);

//taking an array of keys in an object:-
//      or for values
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

//Checking  for a key in an object:-

console.log(obj1.hasOwnProperty('name'));//-> true