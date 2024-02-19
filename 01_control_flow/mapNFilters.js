const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let nextNum = nums.filter((num) => num > 4);
//      or
nextNum = nums.filter((num) => {
    return num > 4;
});
//console.log(nextNum);

const songs = [
    {
      title: "Let It Be",
      genre: "Rock",
      author: "The Beatles"
    },
    {
      title: "Thriller",
      genre: "Pop",
      author: "Michael Jackson"
    },
    {
      title: "Shape of You",
      genre: "Pop",
      author: "Ed Sheeran"
    }
  ];
const search = songs.filter((sg) => {return sg['genre'] == "Rock"} );
//console.log(search[0]['title']);


//            maps:-

const myNumber = [1,2,3,4,5,6,7,8,9];

//const  newNum = myNumber.map((num => { return num + 10}));
const  newNum = myNumber
                      .map((num =>  num + 10))
                      .map((num => num + 1))
                      .filter( num => num >= 15);

//console.log(newNum);

const init = 3;
let sumWithInitial = myNumber.reduce(
  (accumulator , currentValue) => {
    //console.log(`accumulator : ${accumulator} && currentValue : ${currentValue}`);
    return accumulator + currentValue;
  }, init //Setting initial value of accumlator
);
//console.log(sumWithInitial);
////        or
sumWithInitial = myNumber.reduce( (acc , curr) => acc + curr , 0);
//console.log(sumWithInitial);

const shopCart = [
  {
    name:"item00",
    price : 2999
  },
  {
    name:"item01",
    price : 99
  },
  {
    name:"item02",
    price : 999
  }
];

let total = shopCart.reduce( (acc , item) => acc + item.price , 0)

console.log(`total is ${total}`);