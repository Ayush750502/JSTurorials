// for loop for array:-

const arr = [1,2,3,4,5];
const str = "String";

////for-of loop
for (const num of arr) {
    //console.log(`num : ${num}`);
}

for (const char of str) {
    //console.log(`Char :${char}`);
}

// Maps:

const map = new Map();

map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('UK' , "United Kingdoms");
map.set('IN' , "India");// Values do not repeat
// i.e every value has to be unique

//console.log(map);

//for (const key of map) {
//    console.log(key);//prints an arr
//}
for (const [key , value] of map) {
    //console.log(`${key} stands for :- ${value}`);//prints an arr
}

// Iterating Object:-

const obj = {
    name : "Ayush",
    program : "B.Tech CSE",
    course : "JavaScript on node.js"
}

////for (const element of obj) {
////    console.log(element);//object is not iteratable
////}

for (const key in obj) {
    ////console.log(`key:${key}`);// printing keys in the object
    //console.log(`key : ${key} gives value => ${obj[key]}`);
}

// array property:-
arr.forEach(element => {
    //console.log(element);
});

// for-each for running function

function run(item) {
    //console.log(item);
}

arr.forEach(run);

// for getting more details about array elements

arr.forEach((item , idx , array) => {
    //console.log(item , idx , array);//prints element element's index and whole array
});

const lang = [
    {
        language : "python",
        extention : "py"
    },
    {
        language : "java",
        extention : "java"
    },
    {
        language : "javaScript",
        extention : "js"
    }
];

lang.forEach(obj => {
    console.log(obj.language);
});