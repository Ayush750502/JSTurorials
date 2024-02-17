// Functions:-

function tellMyName(){
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}
tellMyName();
tellMyName;

function addingTwoNum(num1 , num2){
    console.log(num1 + num2);
}
console.log("Adding integers");
addingTwoNum(3 , 4);//

console.log("Adding integer with string");
addingTwoNum(3 , "4");//

console.log("Adding integer with null5");
addingTwoNum(3 , null);//

const sum = addingTwoNum(3 , 4);

console.log("Sum: "+sum);//Since function is not returning anything

function addingNums(num1 , num2){
    return (num1 +num2);
}
const result = addingNums(3,5);

console.log("Result: "+result);//Since function is returning some value

function greetUser(name){
    //if(name === undefined){
    if(!name){//undefined => "" => false 
        return('Please enter your name!');
    }
    return `Greetings! ${name}`;
}
console.log(greetUser());//->undefined
console.log(greetUser('Ayush'));//->undefined

function sayHello(name = "Guest"){//setting up a default value
    return `Hello! ${name}`;
}

console.log(sayHello());//->undefined
console.log(sayHello('Ayush'));//->undefined


//--------------------(Functions Part 2)------------------//

function  calPrice(val1 , val2 ,...num1){
    return num1;
}

console.log(calPrice(200 , 300 , 500 , 5000));//Gives an array

const user = {
    name : "Ayush",
    program : "B.Tech CSE",
    setion : "2021-25"
};

function manageUser(anyobject){
    return `My name is ${anyobject.name} and I am currently pursuing ${anyobject.program}`;
}

console.log(manageUser(user));
console.log(manageUser({
    name : "Ayush",
    program : "B.Tech CSE"
}));

const arr = [200,300,400];
function price(getArray){
    return `Price: ${getArray[1]}`;
}
console.log(price(arr));