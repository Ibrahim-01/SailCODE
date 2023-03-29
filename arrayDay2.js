const animal = ["dog", "ram", "sheep", "cow", "pig", "hen"];
const digit = [2, 4, 6, 8, 10, 12, 14, 16, 18];
// console.log(animal.sort());
// console.log(digit.sort());

//max number
// console.log(Math.min.apply(null, digit));
// console.log(Math.min(...digit));
// console.log(Math.max.apply(null, digit));
// console.log(Math.max(...digit));

//REMOVE & ADD

// console.log(animal.push("deer"));
// console.log(animal);
// console.log(animal.unshift("kangaroo"));
// console.log(animal);
// console.log(animal.pop());
// console.log(animal);

// TO UPPER CASE

//  let vat = animal.includes("lion");
//  console.log(vat);

//  let  animal3 = "jaguar";
//  console.log(animal3.toUpperCase());

//  animal.forEach(function (item) {
//     console.log(item.toUpperCase())
//  })

// SPLICE

// console.log(animal);
// console.log(animal.splice(1,4,));
// animal.splice(2,2);
// console.log(animal);

// const arr = [2,5,7,8,4,3,6,8,6,5,6,7];
// arr.splice(3,4);
// console.log(arr)


const data = "29-03-2023T12:25:54";

let date = document.getElementById("now");
let time = document.getElementById("hello");

const bisi = data.split("T")[0];
const titi = data.split("T")[1];

date.innerHTML = bisi.replaceAll("-", "/");
time.innerHTML = titi;