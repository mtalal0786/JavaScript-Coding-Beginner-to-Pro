//Basically there are Only 2 Types of Data.They are Further divided into many other Types.

//Primitive / Call By Value  

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


//Non-Primitive / Call By Reference

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

//*********************************************************************************

        //Memory Alocation and Types

// Stack => Primitive (copy of data)

let myName = "Talal"
let anotherName = myName //give copy of data stored in variable.
anotherName = "M Talal" //changing in this variable value does not effect myName value.

console.log(myName) 
console.log(anotherName) 


// Heap => Non-Primitive (actual data)

let userOne = {
    name: "Talal",
    email: "talal@gmail.com"
}
let userTwo = userOne // gives the same object to the second user
userTwo.name = "M Talal" // changing in the value of userTwo also change value of userOne
//Because they both refer to same object not two seperate objects as done in primitive DT.

console.log(userOne); 
console.log(userTwo);  


//*********************************** References for Study ********************************

// Youtube => https://youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10
// W3School => https://www.w3schools.com/js/js_datatypes.asp