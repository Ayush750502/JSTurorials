////De-structuring

const course = {
    name : "JavaScript",
    price : 999.00,
    coursefield : "Coding"
};

const {coursefield} = course;
console.log(coursefield);

const {coursefield : field} = course;
console.log(field);

////APIs gives json or array of object so destructuring is required for fetching neccssary values

////JSON:-

//{
//    "name" : "Ayush",
//    "course" : "JavaScript"
//}

////Array of object:-

//[
//    {},
//    {}
//]