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