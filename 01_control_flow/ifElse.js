//// If

/// Basics:-

//if(condition){
//    
//}

const cond = true;

if(cond){
    console.log("If is running");
}

if(2 == "2"){
    console.log(`2 = "2"`);
}

if(cond) console.log("If is running"); // Implict way
// If - else:-

if(2 === "2"){
    console.log(`2 = "2"`);
}
else{
    console.log(`2 != "2"`);
}

// if - else if - else:-

const bal = 250;
console.log(`Balance:- ${bal}`);
if(bal < 200){
    console.log("No discount!");
}
else if(bal > 300){
    console.log("Wao! you have got 50% discount");
}
else{
    console.log("You have got 10% discount.");
}