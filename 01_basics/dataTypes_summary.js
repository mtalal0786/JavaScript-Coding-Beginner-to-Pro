//Basically there are Only 2 Types of Data.They are Further divided into many other Types.

//Premetive / Call By Value  
//7 Types. 1) String 2) Number 3) Boolean 4) null 5) undefined 6) Symbol 7) BigInt
const marks = 100 //Number
const name = "Talal" //String
const isLoggedIn = true //Boolean
const outCome = null //null
let average; //undefined
const id = Symbol('123') //Symbol 
//use Symbol to give unique values like for id.
const anotherId = Symbol('123')
// console.log(id===anotherId);
const bigNumber = 4554553454453444345n // BigInt
//use n at end of number to spacify its type as BigInt
// console.log(typeof bigNumber);
//Non-Premetive / Call By Reference
// 1) Arrays 2) Objects 3) Functions

fruits = ["Banana","Mango","Apple","Orange"] //Array

myObj = {
    name:"Talal",
    age:22
} //Object 

const myFunction = function(){
    console.log("My Name is M Talal");
}; //Function 

//Use typeof to check Data Type of Value

// console.log(typeof myObj);


//JavaScript is the Dynamically Typed Language as 
//It Does not Required to describe the type of values when Intialized. 