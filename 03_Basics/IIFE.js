// Immediately Invoked Function Expressions

(function one (){
    console.log("Running IIFE file");
})();

(() => {
    console.log("Pre-processing");
})();

(function (name){
    console.log(`Welcome! ${name}`);
})('Ninja');