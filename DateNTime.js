////Dates
//
//let myDate = new Date();
//console.log("Date Object value:-"+myDate);
//console.log("Date Object value(in String format):-"+myDate.toString());
//console.log("Date Object value(only date with day):-"+myDate.toDateString());
//console.log("Date Object value(only date N time):-"+myDate.toLocaleString());
//console.log("Date Object value(only date):-"+myDate.toLocaleDateString());
//console.log("Date Object value(only time):-"+myDate.toLocaleTimeString());
//
//
//
//let newDate = new Date(2023 , 0 , 23);//Time Default: 12 am
//let newDate2 = new Date(2023 , 0 , 23 , 5 , 3);
////                      YYYY   MM  DD   HH  mm
//console.log("New Date Object value:-"+newDate)
//console.log("New Date Object value(without time parameter values):-"+newDate.toLocaleString());
//console.log("New Date Object value(with time parameter values):-"+newDate2.toLocaleString());

//let newDate3 = new Date("23-01-2023");//Invalid Date
//newDate3 = new Date("2023-01-23");
//console.log(newDate3);

//let newDate4 = Date.now();
//console.log(newDate4);// date in mili second
//
//console.log(Math.floor(newDate4/1000))//in seconds

let newDate5 = new Date();
//
//console.log('Time: '+newDate5.getTime());//in miliseconds
//console.log("Month: "+(newDate5.getMonth()+1));
//console.log("Date: "+newDate5.getDate());
//console.log("Day: "+newDate5.getDay());
//Sun - 0
//Mon - 1
//Tue - 2
//Wed - 3
//Thur - 4
//Fri - 5
//Sat - 6
console.log(newDate5);
newDate5.toLocaleString('default' , {
    weekday : 'long',
});

console.log(newDate5)
