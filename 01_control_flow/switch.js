//// Switch case:-

//// Basics:-

//switch (key) {
//    case value:
//        
//        break;
//
//    default:
//        break;
//}

key = 2;

switch (key) {
    case 1:
        console.log(`January`);
        break;
    case 2:
        console.log(`February`);
        break;
    case 3:
        console.log(`March`);
        break;
    case 4:
        console.log(`April`);
        break;
    default:
        console.log(`The value in not registered!`);
        break;
}

////false values:
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

////true values:-
// " " , [] , {} , function(){} 