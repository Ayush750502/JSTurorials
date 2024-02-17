const accId = 14456;
// in-mutable variable'or constant'

var accMail = "ninja@mail.com";
/* 
Prefer not to use it because js compiler uses var 
as a globale decleration in all scopes
*/
let accPass = '12345';
/*
Prefered to use let to declare variables
*/
accCity = "HiddenVillage";
/*
Prefered not to used
*/
let accState;// = undefined

console.table([accId , accMail , accPass , accCity , accState]);
//               0        1          2         3         4
