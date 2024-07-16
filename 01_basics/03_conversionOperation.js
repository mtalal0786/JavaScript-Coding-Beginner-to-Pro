            // Number Conv
let score = "33" 
//Uncomment all the values one by one to  check there result 
// score = "33abc"
// score = null
// score = undefined
// score = true

// console.log(typeof(score));// actual type
let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));// converted type
// console.log(valueInNumber);// value
            //Boolean Conv
let isLoggedIn = 1
// isLoggedIn =0
// isLoggedIn = ""
// isLoggedIn = "Talal"
let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn) //When value 1 and "filled string" => true; When vale is 0 and "" => false 
                //String Conv
let someNumber = 45
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof (stringNumber))
//*************************************** OPeration ************************************************
let value = 786
let negValue = -value
// console.log(negValue); //Negative value of value variable showed
 
// console.log(2 + 2); //Addition
// console.log(2 - 2); //Subtraction
// console.log(2 * 2); //Multiplication
// console.log(2 / 2); //Division
// console.log(2 ** 2); //Power or Exponent value
// console.log(2 % 2); //Mod .means remaider value of devision

let str1 = "Talal "
let str2 = "Shahbaz"
let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+ 3);
// console.log(2+ "1");
// console.log(2 + 2 +"1");
// console.log("1" + 2 + 2); // use paranshesis to give prefrence to any operation

// console.log(+true);
// console.log(+"");

let num1,num2,num3;
num1 = num2  = num3 = 2 + 2; //Don't use this type of Initialization
 
gameCounter = 50
gameCounter++;
console.log(gameCounter); //There is Prefix And Postfix are two type of Increment and Decrement Operators.
// Prefix performed before execution like ++gameCounter.
//Postfix performed after execution like gameCounter++.