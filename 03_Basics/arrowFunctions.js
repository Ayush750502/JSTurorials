//

let one = function() {
    let name = "Ayush";
    console.log(`${this}`);//Scope global
}

one();

one = () => {
    let name = "Ayush";
    console.log(`${this}`);//Scope local or block
}

one();

let addTwo = (a , b) => {
    return a + b;
}
console.log(addTwo(2,3));


addTwo = (a , b) => a + b;//Implict return
console.log(addTwo(5,3));

const retnObj = () => ({name : "Ayush"});//For Objects parenthises '( )' is mandatory
console.log(retnObj());

