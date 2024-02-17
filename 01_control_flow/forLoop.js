//// for

//for (let index = 0 ; index < limit ; index++){
//
//}

for (let index = 0; index < 3; index++) {
    console.log(`"Outer" : ${index}`);
    for (let j = 0; j < 5; j++) {
        console.log(`|\t"Inner" : ${j}`);
        
    }
}


let arr = ["A" , "B" , "C"];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(`At Index${index} value is: ${element}`);
}

// also keywords like 'break' and 'continue' is support: