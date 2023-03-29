// const list = ['lion', 'zebra', 'ram', 'rabbit', 'crocodile',] ;
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]);
// console.log(list[4]);
// console.log(list );
// console.log(list.length);
// console.log(list[2]);
// const rice = Array(6).fill("friedrice");
// console.log(rice);

// const stack = "react";
// let p = stack.split("");
// console.log(p);

// // concat
// const firstName = [1,2,3,4,5];
// const secondName = [6,7,8,9,10];
// const thirdName = [firstName, secondName];
// console.log(thirdName);
// console.log(firstName.concat(secondName));

// // indexof

// const animals = ['lion', 'zebra', 'ram', 'rabbit', 'lion' ,'crocodile', 'ram'] ;
// let position = animals.lastIndexOf("lion");
// console.log(position);


// // includes
// let statuse = animals.includes('ram');
// console.log(statuse);
// const number2 = 35;
// console.log(Array.isArray(animals));
// console.log(Array.isArray(number2));

// // toString

// const numList = [4,8,12,16,20];
// console.log(numList.toString());
// console.log(numList);

// // classwork

// const itCompany = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];
// console.log(itCompany);
// console.log(itCompany.length);
// console.log(itCompany[0]);
// console.log(itCompany[6]);

// find method

let jar = [1,2,3,4,5,6];
let names = ["gilbert", "kevin", "messi"];

let found = jar.find((item) => item > 2);
let foundName = names.find((item) => item === "kevin");
alert(found);
alert(foundName);

// findIndex()

let foundIndex = jar.findIndex((item) => item == 4);
alert(foundIndex);


// let chuks = jar.foundLastIndex((item) => item == 4);
// alert(chuks);

// filter method 

let zobo = jar.filter((item) =>  item > 2 );
alert(zobo);

//map method

let squaredNumber = jar.map((item) => item / 2 );
alert(squaredNumber);

let ayo = names.map((item) => item.length);
alert(ayo);
 

//sort method

const unsortedNumber = ["2","1","3","5","7","6","10","9","8"];
alert(unsortedNumber.sort((a,b) => b - a ));
alert(names.sort());


 //reverse method 
let reversed = jar.reverse();
alert(reversed);

//split method

let str =  "jaja,manuel,sulaimon";
let strArr = str.split(",");
alert(strArr);
